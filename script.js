const texte = {
  de: {
    titel: "Blühende Akademie",
    erstefrage: "Was ist ein Wunder der Propheten?",
    zweitefrage: "Weiss ein Prophet die Zukunft?",
    drittefrage: "Wie ist das geschehen?",
    simplenote:
      "Nachdenken tut gut! Lasst uns den Text gemeinsam lesen und darüber nachdenken!",
    zurbuecher:
      "Nenne ein Stichwort, suche es auf deinem Handy, wähle einen Abschnitt aus und lies ihn vor!",
    zumtranskript:
      "Komm, wir übersetzen ein paar Sätze zum Thema auf Deutsch!",
    kahoot: "Zeit für Kahoot!",
    suchefaehigkeit:
      "Recherchiert kurz: Hadithe über guten Charakter (gute Moral)?",
    gebetuebung: "Gebetsübung! Lies bitte laut vor!",
    gebetauswendiglernen:
      "Zeit zum Auswendiglernen! Lasst es uns gemeinsam und nacheinander 7 Mal laut aufsagen!",
    fazit:
      "Schreiben wir einen kurzen Blogbeitrag auf Deutsch oder Türkisch: Was haben wir heute gefühlt, verstanden, gedacht und gelernt?",
  },
  tr: {
    titel: "Medreset'üz Zehra",
    erstefrage: "Peygamber mucizesi nedir?",
    zweitefrage: "Peygamber geleceği bilir mi?",
    drittefrage: "Bu nasıl oldu?",
    simplenote:
      "Düşünmek çok yararlıdır! Tefekkür için metni birlikte okuyalım!",
    zurbuecher:
      "Bir anahtar kelime söyle ve telefonunda bul, bir bölüm seç ve oku!",
    zumtranskript:
      "Haydi konu ile ilgili birkaç cümleyi Almanca'ya tercüme edelim!",
    kahoot: "Kahoot Zamanı!",
    suchefaehigkeit:
      "Araştırın: Güzel ahlak ile ilgili hadis-i şerifler?",
    gebetuebung: "Namaz alıştırması! Yüksek sesle oku!",
    gebetauswendiglernen:
      "Ezberleme zamanı! Birlikte ve sırayla 7 kez yüksek sesle okuyalım!",
    fazit:
      "Bugün ne hissettiğimizi, ne anladığımızı, ne düşündüğümüzü ve ne öğrendiğimizi Almanca veya Türkçe olarak blogda kısa bir metin halinde yazalım!",
  },
};

function wechselSprache(sprache) {
  for (let elID in texte[sprache]) {
    const el = document.getElementById(elID);

    if (el) {
      el.innerText = texte[sprache][elID];
    }
  }
}

wechselSprache("de");

document.getElementById("sprache").addEventListener("change", function () {
  const sprache = this.value;
  wechselSprache(sprache);
  document.documentElement.lang = sprache; // 'de' oder 'tr'
});
