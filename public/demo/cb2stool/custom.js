var abTestGroup = $AXIS.abTest.get();
// 1) External Callback - load event
function vertebraeInitialization(vObject) {
  var variant;
  switch (vObject.alt) {
    case 0:
      // Hard code for control (always set to 0)
      variant = "control";
      break;
    case null:
      // Catch null groups - set to vertebrae (generic)
      variant = "vertebrae";
      break;
    default:
      // Set based on alt code
      variant = "vertebrae_" + vObject.alt;
  }

  document.body.dispatchEvent(
    new CustomEvent("fVertebraeInitialized", {
      detail: {
        variant: variant
      },
      bubbles: true,
      cancelable: true
    })
  );
}

// 2) External Callback - click event
function vertebraeARClick() {
  document.body.dispatchEvent(
    new CustomEvent("fVertebraeInteracted", {
      detail: {
        interacted: true
      },
      bubbles: true,
      cancelable: true
    })
  );
}

function loadARButton(sku, containerClass) {
  try {
    //Load Axis Search on a page per SKU
    $AXIS("loadAxisSearch", {
      productId: sku
    });

    var placeholderTarget = $("body").hasClass("responsive-layout")
      ? "beforeend"
      : "afterend";

    let target = top.document.querySelector(".showcase-widget");
    if (target) {
      let vertebraeButtonContainer = document.createElement("div");
      vertebraeButtonContainer.classList.add(containerClass);
      //Wait for Options to be reloaded to add their event listeners again
      if (containerClass == "vertebraeplaceholder") {
        //the vertebraeplaceholder class is used on family pages where the button exists over hero image or on single product pages
        if (abTestGroup === "2") {
          //This could be formatted for only m
          vertebraeButtonContainer.classList.add("larger-vertbutton");
        }
        let placeHolderExists = document.querySelector(".vertebraeplaceholder");
        if (!placeHolderExists) {
          if (placeholderTarget == "beforeend") {
            //insert beforeend of target
            target.appendChild(vertebraeButtonContainer);
          } else {
            //insert afterend of target
            try {
              if (target.nextElementSibling) {
                console.log(target.nextElementSibling);
                target.parentNode.insertBefore(
                  vertebraeButtonContainer,
                  target.nextElementSibling
                );
              } else {
                target.parentNode.appendChild(vertebraeButtonContainer);
              }
            } catch (e) {
              console.log("Cannot insert before");
            }
          }
        } else {
          console.log("placeholder exists");
        }
      } else {
        //probably a hidden button
        document.body.appendChild(vertebraeButtonContainer);
      }
      $AXIS("loadAxisButton", {
        productId: sku,
        container: vertebraeButtonContainer,
        alt: "vertTest",
        clickCallback: "vertebraeARClick",
        noExperienceCallback: "noExperienceCallback",
        initCallback: "vertebraeInitialization",
        clientEnvironment: "vertebraeManaged"
      });
      setTimeout(function() {
        let buttonPlaced = document.querySelector("." + containerClass);
        if (!buttonPlaced) {
          loadARButton(sku, containerClass);
        } else {
        }
      }, 1000);
    } else {
      console.log("No Target or Still Waiting");
    }
  } catch (e) {
    console.log(e);
  }
}

function loadInvisibleButtons() {
  try {
    let selectionSKUEls = document.querySelectorAll(".short-attribute");
    if (selectionSKUEls.length > 1) {
      for (var opt = 0; opt < selectionSKUEls.length; opt++) {
        currentSKUList = selectionSKUEls[opt].parentNode
          .getAttribute("data-matchingskus")
          .split(",");
        for (var split = 0; split < currentSKUList.length; split++) {
          currentSKU = "s" + currentSKUList[split];
          loadARButton(currentSKU, "vp_" + opt + split);
        }
      }
    }
  } catch (e) {}
}

var retries = 0;
function loadFamilyPage() {
  try {
    loadInvisibleButtons(); //load all sku option buttons on the page
    var isMobile = $("body").hasClass("responsive-layout");
    let selectionSKUEls = document.querySelectorAll(".short-attribute");

    let altFamPage = document.querySelector(".grouper-carousel");
    var lineItems = document.querySelectorAll(".line-item .item-details");
    //load a placeholder for the most popular sku, likely a 5x8 rug
    if (altFamPage && lineItems.length == 0) {
      if (selectionSKUEls.length >= 2) {
        let skuLIST = selectionSKUEls[1].parentNode.getAttribute(
          "data-matchingskus"
        );
        var sku = skuLIST.split(",")[1];
        //if we are on the white rug page
        //on f20227 and f20226 as of 2/5/2020
        //2.5 x 8 is white, grey
        //5x8 is grey, white
        //8x10 is white, grey
        if (window.location.href.includes("f20227")) {
          //if on ivory
          var sku = skuLIST.split(",")[1];
        }
        if (window.location.href.includes("f20226")) {
          var sku = skuLIST.split(",")[0];
        }
        //grey family is f20226
        loadARButton("s" + sku, "vertebraeplaceholder");
      }
      setTimeout(function() {
        var placeholder = document.querySelector(".vertebraeplaceholder");
        if (!placeholder) {
          retries += 1;
          if (retries < 2) {
            loadFamilyPage();
          }
        } else {
        }
      }, 2500);
    } else {
      if (lineItems) {
        //If it is not the alternate family page type
        for (i = 0; i < lineItems.length; i++) {
          var lineItem = lineItems[i];
          var link = lineItem.querySelector(":scope a.item-view-details-link")
            .href;
          var sku = link.substring(link.lastIndexOf("/") + 1);
          var containerId = "vertebraeplaceholder_" + i;
          if (sku) {
            var div = document.createElement("div");
            div.setAttribute("id", containerId);
            div.className = "vertebraeplaceholder_family";
            if (abTestGroup === "2") {
              //This could be formatted for only mobile
              div.classList.add("larger-vertbutton");
            }
            if (isMobile) {
              lineItem.previousSibling.appendChild(div);
            } else {
              lineItem.appendChild(div);
            }
            $AXIS("loadAxisButton", {
              productId: sku,
              container: div,
              alt: "vertTest",
              clickCallback: "vertebraeARClick",
              initCallback: "vertebraeInitialization",
              clientEnvironment: "vertebraeManaged"
            });
          } else {
            console.log("Could not find SKU");
          }
        }
      } else {
        console.log("no lineitems");
      }
      setTimeout(function() {
        var vButtons = document.querySelectorAll(
          ".vertebraeplaceholder_family"
        );
        if (vButtons.length == 0) {
          retries += 1;
          if (retries < 2) {
            console.log("retry");
            loadFamilyPage();
          }
        }
      }, 2000);
    }
  } catch (e) {
    console.log(e);
  }
}

//listen for when a family page has received a swatch click
function listenForFamilyVariants() {
  document.addEventListener("fGrouperSelectionChanged", function(event) {
    loadARButton("s" + event.detail.Sku, "vertebraeplaceholder");
  });
}

function loadVertebrae() {
  var pageType = top.pageCategory.pageType;

  if (pageType === "product") {
    loadARButton(digitalData.page.pageInfo.pageId, "vertebraeplaceholder");
  } else if (pageType === "family") {
    loadFamilyPage();
    listenForFamilyVariants();
  }
}

loadVertebrae();
