import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Select from "../../components/Select";

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  function formatSelectData() {
    const validLangs = Object.keys(i18n.options.resources);
    const data = validLangs.map((code) => ({
      code,
      name: t(`languages.${code}`),
    }));
    return data;
  }

  return (
    <Container>
      <h1>{t("languageSelectorTitle")}</h1>
      <p>{t("languageSelectorText")}</p>
      <Select
        className="mt-3"
        changeLang={i18n.changeLanguage}
        currentLang={i18n.language}
        data={formatSelectData()}
      />
    </Container>
  );
}

export default LanguageSelector;
