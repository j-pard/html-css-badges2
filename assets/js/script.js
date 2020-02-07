(() => {
      const STRUCT_ELTS = Array.from(document.querySelectorAll("#struct-elements li"));
      const STRUCT_CONT = document.getElementById("html-container");
      const STRUCT_DIV = Array.from(document.getElementsByClassName("struct"));

      const contCheck = () => {
            STRUCT_CONT.addEventListener("mouseenter", () => {
                  STRUCT_ELTS.forEach(el => {
                        el.classList.add("unfocused");
                  });
                  structCheck();
            });
            STRUCT_CONT.addEventListener("mouseleave", () => {
                  STRUCT_ELTS.forEach(el => {
                        el.classList.remove("unfocused");
                  })
            });
      }

      const focus = (id) => {
            document.getElementById(id).classList.remove("unfocused");
      }

      const Unfocus = (id) => {
            document.getElementById(id).classList.add("unfocused");
      }

      const structCheck = () => {
            STRUCT_DIV.forEach(div => {
                  div.addEventListener("mouseenter", () => {
                        switch (div.id) {
                              case "header-div" :
                                    focus("header-li");
                                    break;
                              case "nav-div" :
                                    focus("nav-li");
                                    break;
                              case "main-div" :
                                    focus("main-li");
                                    break;
                              case "section-div" :
                                    focus("section-li");
                                    break;
                              case "article-div1" :
                                    focus("article-li");
                                    break;
                              case "article-div2" :
                                    focus("article-li");
                                    break;
                              case "aside-div" :
                                    focus("aside-li");
                                    break;
                              case "footer-div" :
                                    focus("footer-li");
                                    break;
                        }
                  });
                  div.addEventListener("mouseleave", () => {
                        switch (div.id) {
                              case "header-div" :
                                    Unfocus("header-li");
                                    break;
                              case "nav-div" :
                                    Unfocus("nav-li");
                                    break;
                              case "main-div" :
                                    Unfocus("main-li");
                                    break;
                              case "section-div" :
                                    Unfocus("section-li");
                                    break;
                              case "article-div1" :
                                    Unfocus("article-li");
                                    break;
                              case "article-div2" :
                                    Unfocus("article-li");
                                    break;
                              case "aside-div" :
                                    Unfocus("aside-li");
                                    break;
                              case "footer-div" :
                                    Unfocus("footer-li");
                                    break;
                        }
                  });
            });
      }
      
      // RUNNING

      contCheck();
})();