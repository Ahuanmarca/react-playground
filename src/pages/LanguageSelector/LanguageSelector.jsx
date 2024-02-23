import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Select from "../../components/Select";

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    const currentLang = i18n.language;
    const validLangs = Object.keys(i18n.options.resources);
    const isValidLang = validLangs.includes(currentLang);
    if (!isValidLang) i18n.changeLanguage("en-US");
  }, [i18n]);

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
