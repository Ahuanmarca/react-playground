import React from 'react';
import { Play, Pause } from 'react-feather';

function MediaPlayer({
  src = 'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3',
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef();

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Space') {
        setIsPlaying((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  React.useEffect(() => {
    isPlaying && audioRef.current.play();
    !isPlaying && audioRef.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <div>
        <h1>Audio Player</h1>
        <p>You can play/pause by clicking the button or pressing Spacebar.</p>
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <p><strong>Take It Easy</strong> by Burnout ft. Mia Vaile</p>
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />

        <h2>
          <code>isPlaying</code> state
        </h2>
        <p>
          In this component we have a state that is the single source of truth
          for wether the audio is playing or not:{' '}
          <code>const [isPlaying, setIsPlaying] = React.useState(false);</code>{' '}
        </p>
        <h2>Updating the state</h2>
        <p>
          We use <code>useEffect</code> to subscribe an event listener on the
          window. If the key is &apos;Space&apos;, we toggle the{' '}
          <code>isPlaying</code> state. <strong>The tricky part: </strong> we
          want so subscribe the event listener only when the component mounts,
          but if we &apos;check&apos; the <code>isPlaying</code> state, React
          (esLint) wants us to put the state on the dependency array. The
          solution is to update the <code>isPlaying</code> state with a
          callback: <code>setIsPlaying((prev) =&gt; !prev);</code>
        </p>
        <h2>
          Updating the <code>audio</code> tag
        </h2>
        <p>
          With a different <code>useEffect</code> call, every time the{' '}
          <code>isPlaying</code> state changes, we update the <code>audio</code>{' '}
          tag to play or pause. This way we only need to worry about updating
          the <code>isPlaying</code> state.
        </p>
      </div>
    </div>
  );
}

export default MediaPlayer;
