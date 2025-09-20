import data from './lang.json'

export class Lang {
  static defaultLang = 'en-EN';

  static getLang() {
    // Récupère la langue du localStorage en priorité
    const storedLang = localStorage.getItem('lang');
    return storedLang || navigator.language;
  }

  static translate(key, lang = null) {
    const targetLang = lang || this.getLang();
    const translations = data.MakVieSAinte.find(el => el.lang === targetLang) || 
                        data.MakVieSAinte.find(el => el.lang === this.defaultLang) ||
                        data.MakVieSAinte[0];
    
    // Gestion des clés imbriquées (ex: "auth.longin_page.connexion")
    return this.getNestedValue(translations, key) || key;
  }

  static getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
}
