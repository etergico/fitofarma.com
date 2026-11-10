/* LOGO PRODUCTOS */
new Vue({
  el: "#header__logo-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 1,
        url: "../index.html",
        image: "../recursos/logo.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* REDES SOCIALES DESKTOP  PRODUCTOS */
new Vue({
  el: "#header__right-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 2,
        url: "",
        image: "../recursos/redes-sociales/instagram.webp",
      },
      {
        id: 3,
        url: "",
        image: "../recursos/redes-sociales/tik-tok.webp",
      },
      {
        id: 4,
        url: "",
        image: "../recursos/redes-sociales/facebook.webp",
      },
      {
        id: 5,
        url: "",
        image: "../recursos/redes-sociales/whatsapp.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* MENU DESKTOP PRODUCTOS */
new Vue({
  el: "#dropdown-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 6,
        url: "../medicamentos.html",
        title: "MEDICAMENTOS",
      },
      {
        id: 7,
        url: "",
        title: "DERMOCOSMÉTICOS",
      },
      {
        id: 8,
        url: "",
        title: "BIENESTAR Y NUTRICIÓN",
      },
      {
        id: 9,
        url: "",
        title: "SALUD SEXUAL",
      },
      {
        id: 10,
        url: "",
        title: "BEBÉ Y MATERNIDAD",
      },
      {
        id: 11,
        url: "",
        title: "CUIDADO PERSONAL",
      },
      {
        id: 12,
        url: "",
        title: "EXTRACTOS Y PLANTAS",
      },
    
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* LOGO RESPONSIVE PRODUCTOS*/
new Vue({
  el: "#logo-responsive-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 13,
        url: "../index.html",
        image: "../recursos/logo.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* REDE SOCIALES RESPONSIVE */
new Vue({
  el: "#iconos-redes-responsive-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 14,
        url: "",
        image: "../recursos/redes-sociales/instagram.webp",
      },
      {
        id: 15,
        url: "",
        image: "../recursos/redes-sociales/tik-tok.webp",
      },
      {
        id: 16,
        url: "",
        image: "../recursos/redes-sociales/facebook.webp",
      },
      {
        id: 17,
        url: "",
        image: "../recursos/redes-sociales/whatsapp.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* MENU RESPONSIVE PRODUCTOS */
new Vue({
  el: "#menu-responsive-productos",
  data: {
    searchString: "",
    articles: [
      {
        id: 18,
        url: "../medicamentos.html",
        title: "MEDICAMENTOS",
      },
      {
        id: 19,
        url: "",
        title: "DERMOCOSMÉTICOS",
      },
      {
        id: 20,
        url: "",
        title: "BIENESTAR Y NUTRICIÓN",
      },
      {
        id: 21,
        url: "",
        title: "SALUD SEXUAL",
      },
      {
        id: 22,
        url: "",
        title: "BEBÉ Y MATERNIDAD",
      },
      {
        id: 23,
        url: "",
        title: "CUIDADO PERSONAL",
      },
      {
        id: 24,
        url: "",
        title: "EXTRACTOS Y PLANTAS",
      },
    
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});









/* LOGO DESKTOP */
new Vue({
  el: "#header__logo",
  data: {
    searchString: "",
    articles: [
      {
        id: 25,
        url: "index.html",
        image: "recursos/logo.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* REDES SOCIALES DESKTOP */
new Vue({
  el: "#header__right",
  data: {
    searchString: "",
    articles: [
      {
        id: 26,
        url: "",
        image: "recursos/redes-sociales/instagram.webp",
      },
      {
        id: 27,
        url: "",
        image: "recursos/redes-sociales/tik-tok.webp",
      },
      {
        id: 28,
        url: "",
        image: "recursos/redes-sociales/facebook.webp",
      },
      {
        id: 29,
        url: "",
        image: "recursos/redes-sociales/whatsapp.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* MENU DESKTOP */
new Vue({
  el: "#dropdown",
  data: {
    searchString: "",
    articles: [
      {
        id: 30,
        url: "medicamentos.html",
        title: "MEDICAMENTOS",
      },
      {
        id: 31,
        url: "",
        title: "DERMOCOSMÉTICOS",
      },
      {
        id: 32,
        url: "",
        title: "BIENESTAR Y NUTRICIÓN",
      },
      {
        id: 33,
        url: "",
        title: "SALUD SEXUAL",
      },
      {
        id: 34,
        url: "",
        title: "BEBÉ Y MATERNIDAD",
      },
      {
        id: 35,
        url: "",
        title: "CUIDADO PERSONAL",
      },
      {
        id: 36,
        url: "",
        title: "EXTRACTOS Y PLANTAS",
      },
    
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});






/* LOGO RESPONSIVE */
new Vue({
  el: "#logo-responsive",
  data: {
    searchString: "",
    articles: [
      {
        id: 37,
        url: "index.html",
        image: "recursos/logo.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* REDE SOCIALES RESPONSIVE */
new Vue({
  el: "#iconos-redes-responsive",
  data: {
    searchString: "",
    articles: [
      {
        id: 38,
        url: "",
        image: "recursos/redes-sociales/instagram.webp",
      },
      {
        id: 39,
        url: "",
        image: "recursos/redes-sociales/tik-tok.webp",
      },
      {
        id: 40,
        url: "",
        image: "recursos/redes-sociales/facebook.webp",
      },
      {
        id: 41,
        url: "",
        image: "recursos/redes-sociales/whatsapp.webp",
      },
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
/* MENU RESPONSIVE */
new Vue({
  el: "#menu-responsive",
  data: {
    searchString: "",
    articles: [
      {
        id: 42,
        url: "medicamentos.html",
        title: "MEDICAMENTOS",
      },
      {
        id: 43,
        url: "",
        title: "DERMOCOSMÉTICOS",
      },
      {
        id: 44,
        url: "",
        title: "BIENESTAR Y NUTRICIÓN",
      },
      {
        id: 45,
        url: "",
        title: "SALUD SEXUAL",
      },
      {
        id: 46,
        url: "",
        title: "BEBÉ Y MATERNIDAD",
      },
      {
        id: 47,
        url: "",
        title: "CUIDADO PERSONAL",
      },
      {
        id: 48,
        url: "",
        title: "EXTRACTOS Y PLANTAS",
      },
    
    ],
  },
  computed: {
    filteredArticles: function () {
      const searchString = this.searchString.trim().toLowerCase();
      if (!searchString) {
        return this.articles;
      }
      return this.articles.filter((article) =>
        article.title.toLowerCase().includes(searchString)
      );
    },
  },
});
