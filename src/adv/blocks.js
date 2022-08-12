define(function () {
  return (opt = {}) => {
    let tableStyleStr = "";
    let cellStyleStr = "";
    let editor = opt.editor;
    let tableStyle = opt.tableStyle || {};
    let cellStyle = opt.cellStyle || {};
    let bm = editor.BlockManager;
    for (let prop in tableStyle) {
      tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
    }
    for (let prop in cellStyle) {
      cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
    }
    bm.getAll().reset();

    bm.add("applyQrCode", {
      label: opt.applyQrCodeBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-qrcode" },
      content: {
        type: "image",
        editable: false,
        droppable: true,
        style: {
          "min-height": "100px",
          "min-width": "100px",
          width: "100px",
          "background-image": "url('https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fostendis.com&chs=100x100')",
        },
        attributes: { src: "$$$ApplyQrCode$$$", alt: "Apply link QR code" },
      },
    });

    bm.add("viewQrCode", {
      label: opt.viewQrCodeBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-qrcode" },
      content: {
        type: "image",
        editable: false,
        droppable: true,
        style: {
          "min-height": "100px",
          "min-width": "100px",
          width: "100px",
          "background-image": "url('https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2Fostendis.com&chs=100x100')",
        },
        attributes: { src: "$$$ViewQrCode$$$", alt: "View link QR code" },
      },
    });

    bm.add("applyButton", {
      label: opt.buttonApplyBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-button" },
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" target="_blank" class="button">${opt.buttonApplyBlkText}</a>`,
    });

    bm.add("button", {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: `<a data-gjs-type="link" class="button">Button</a>`,
      attributes: { class: "gjs-fonts gjs-f-button" },
    });

    

    bm.add("divider", {
      label: opt.dividerBlkLabel,
      category: opt.categoryLabel,
      content: `<hr style="border-top: 1px solid #2b303b;" />`,
      attributes: { class: "gjs-fonts gjs-f-divider" },
    });

    bm.add("text", {
      label: opt.textBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-text" },
      content: {
        type: "text",
        content: "Text",
      },
    });

    bm.add("text2", {
      label: opt.textBlkLabelWithSpace,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-text" },
      content: {
        type: "text",
        content: "Text",
        style: { "margin-top": "15px", "margin-bottom": "15px" },
      },
    });

    bm.add("text-sect", {
      label: opt.textSectionBlkLabel,
      category: opt.categoryLabel,
      content: `<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>`,
      attributes: { class: "gjs-fonts gjs-f-h1p" },
    });

    bm.add("ulist", {
      label: opt.ulistBlkLabel,
      category: opt.categoryLabel,
      name: opt.ulistBlkLabel,
      attributes: { class: "fa fa-list-ul" },
      content: { 
        type: "ulist",
        style: { "padding-top":"0.2em", "padding-bottom":"0.2em", "margin-left" : "2em" }, 
      },
    });

    bm.add("icon", {
      label: opt.iconBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-smile-o" },
      content: { type: "icon" },
    });

    bm.add("image", {
      label: opt.imageBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-image" },
      content: {
        type: "image",
        activeOnRender: 1,
      },
    });

    bm.add("video", {
      label: opt.videoBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-youtube-play" },
      content: {
        type: "video",
        src: "/video.mp4",
        style: {
          width: "100%",
          height: '350px',
        },
      },
    });

    bm.add('map', {
      label: opt.mapBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: 'fa fa-map-o' },
      content: {
        type: 'map',
        style: { 
          width: "100%",
          height: '350px',
        },
      },
    });

    bm.add("box", {
      label: "Box",
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b1" },
      content: {
        style: {
          padding: "20px",
        },
      },
    });

    bm.add("quote", {
      label: opt.quoteBlkLabel,
      category: opt.categoryLabel,
      content: `<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>`,
      attributes: { class: "fa fa-quote-right" },
    });

    bm.add("link", {
      label: opt.linkBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-link" },
      content: {
        type: "link",
        content: "Link",
      },
    });

    bm.add("link-block", {
      label: opt.linkBlockBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-link" },
      content: {
        type: "link",
        editable: false,
        droppable: true,
        style: {
          display: "inline-block",
          padding: "5px",
          "min-height": "50px",
          "min-width": "50px",
        },
      },
    });

    // let gridItem = `<table class="grid-item-card">
    //     <tr>
    //       <td class="grid-item-card-cell">
    //         <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
    //         <table class="grid-item-card-body">
    //           <tr>
    //             <td class="grid-item-card-content">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;

    // bm.add("grid-items", {
    //   label: opt.gridItemsBlkLabel,
    //   category: opt.categoryLabel,
    //   content: `<table class="grid-item-row">
    //     <tr>
    //       <td class="grid-item-cell2-l">${gridItem}</td>
    //       <td class="grid-item-cell2-r">${gridItem}</td>
    //     </tr>
    //   </table>`,
    //   attributes: { class: "fa fa-th" },
    // });

    // let listItem = `<table class="list-item">
    //     <tr>
    //       <td class="list-item-cell">
    //         <table class="list-item-content">
    //           <tr class="list-item-row">
    //             <td class="list-cell-left">
    //               <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
    //             </td>
    //             <td class="list-cell-right">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;

    // bm.add("list-items", {
    //   label: opt.listItemsBlkLabel,
    //   category: opt.categoryLabel,
    //   content: listItem + listItem,
    //   attributes: { class: "fa fa-th-list" },
    // });

    bm.add("input-range", {
      label: opt.inputRangeBlkLabel,
      category: opt.categoryLabel,
      content: { type: "range" },
      attributes: { class: "fa fa-sliders" },
    });

    // Ostendis blocks
    bm.add('ost-organization', {
      label: opt.textBlkLabelOrg,
      category: 'Ostendis',
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelOrg,
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleOrg + '</h3>',
            attributes: { "data-ost-type": "organizationHeading" },
          },
          {
            name: opt.textBlkLabelOrg,
            type: 'text',
            content: opt.textBlkContentOrg,
            attributes: { "data-ost-type": "organization" },
          },
        ],
      },
    });
    bm.add('ost-introduction', {
      label: opt.textBlkLabelIntro,
      category: 'Ostendis',
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelIntro,
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleIntro + '</h3>',
            attributes: { "data-ost-type": "introductionHeading" },
          },
          {
            name: opt.textBlkLabelIntro,
            type: 'text',
            content: opt.textBlkContentIntro,
            attributes: { "data-ost-type": "introduction" },
          },
        ],
      },
    });
    bm.add('ost-description', {
      label: opt.textBlkLabelDesc,
      category: 'Ostendis',
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelDesc,
        type: 'text',
        components: [
          {
            type: 'text',
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleDesc + '</h3>',
            attributes: { "data-ost-type": "descriptionHeading" },
          },
          {
            name: opt.textBlkLabelDesc,
            type: 'text',
            content: opt.textBlkContentDesc,
            attributes: { "data-ost-type": "description" },
          },
        ],
      },
    });
    bm.add("ost-tasks", {
      label: opt.textBlkLabelTasks,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        type: "text",
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleTasks + '</h3>',
            attributes: { "data-ost-type": "tasksHeading" },
          },
          {
            name: opt.textBlkLabelTasks,
            type: "text",
            content: opt.textBlkContentTasks,
            attributes: { "data-ost-type": "tasks" },
          },
        ],
      },
    });

    bm.add("ost-requirements", {
      label: opt.textBlkLabelReq,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        type: "text",
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleReq + '</h3>',
            attributes: { "data-ost-type": "requirementsHeading" },
          },
          {
            name: opt.textBlkLabelReq,
            type: "text",
            content: opt.textBlkContentReq,
            attributes: { "data-ost-type": "requirements" },
          },
        ],
      },
    });

    bm.add("ost-benefits", {
      label: opt.textBlkLabelBenefits,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        type: "text",
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleBenefits + '</h3>',
            attributes: { "data-ost-type": "benefitsHeading" },
          },
          {
            name: opt.textBlkLabelBenefits,
            type: "text",
            content: opt.textBlkContentBenefits,
            attributes: { "data-ost-type": "benefits" },
          },
        ],
      },
    });

    bm.add("ost-contact", {
      label: opt.textBlkLabelContact,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        type: "text",
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleContact + '</h3>',
            attributes: { "data-ost-type": "contactHeading" },
          },
          {
            name: opt.textBlkLabelContact,
            type: "text",
            content: opt.textBlkContentContact,
            attributes: { "data-ost-type": "contact" },
          },
        ],
      },
    });

    bm.add("ost-action", {
      label: opt.textBlkLabelAction,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelAction,
        type: "text",
        content: opt.textBlkContentAction,
        attributes: { "data-ost-type": "calltoaction" },
      },
    });

    // Social Media blocks
    bm.add("facebook", {
      label: opt.facebookBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://facebook.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i aria-hidden="true" class="fab fa-facebook-square"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-facebook-square" },
    });

    bm.add("instagram", {
      label: opt.instagramBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://instagram.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i aria-hidden="true" class="fab fa-instagram-square"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-instagram" },
    });
    bm.add("youtube", {
      label: opt.youtubeBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://www.youtube.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i aria-hidden="true" class="fab fa-youtube"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-youtube-play" },
    });

    bm.add("linkedin", {
      label: opt.linkedinBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://linkedin.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i aria-hidden="true" class="fab fa-linkedin"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-linkedin-square" },
    });

    bm.add("xing", {
      label: opt.xingBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://xing.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i aria-hidden="true" class="fab fa-xing-square"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-xing-square" },
    });

    bm.add("twitter", {
      label: opt.twitterBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://twitter.com/",
          target: "_blank",
        },
        components: `<div style="display:flex; justify-content: center; align-items: center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i class="fab fa-twitter-square"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-twitter-square" },
    });


    // Social Media Share blocks
    bm.add("facebookShare", {
      label: opt.facebookBlkLabelShare,
      category: opt.smSharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://www.facebook.com/sharer/sharer.php?u=$$$ViewLink$$$",
          target: "_blank",
        },
        components: `<div style="border: 2px solid #293133; border-radius: 3px; display:flex; justify-content: space-around; align-items: center; text-align:center; width:60px; height:28px; font-size:21px; color:#293133;">
                      <i class="fas fa-share"></i>
                      <i class="fab fa-facebook-f"></i>
                    </div>`,
      },

      attributes: { class: "fa fa-facebook-square" },
    });

    bm.add("linkedinShare", {
      label: opt.linkedinBlkLabelShare,
      category: opt.smSharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://www.linkedin.com/shareArticle?mini=true&url=$$$ViewLink$$$",
          target: "_blank",
        },
        components: `<div style="border: 2px solid #293133; border-radius: 3px; display:flex; justify-content: space-around; align-items: center; text-align:center; width:60px; height:28px; font-size:21px; color:#293133;">
                      <i class="fas fa-share"></i>
                      <i class="fab fa-linkedin-in"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-linkedin-square" },
    });

    bm.add("xingShare", {
      label: opt.xingBlkLabelShare,
      category: opt.smSharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://www.xing.com/spi/shares/new?url=$$$ViewLink$$$",
          target: "_blank",
        },
        components: `<div style="border: 2px solid #293133; border-radius: 3px; display:flex; justify-content: space-around; align-items: center; text-align:center; width:60px; height:28px; font-size:21px; color:#293133;">
                      <i class="fas fa-share"></i>
                      <i class="fab fa-xing"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-xing-square" },
    });

    bm.add("twitterShare", {
      label: opt.twitterBlkLabelShare,
      category: opt.smSharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://twitter.com/intent/tweet?url=$$$ViewLink$$$&text=",
          target: "_blank",
        },
        components: `<div style="border: 2px solid #293133; border-radius: 3px; display:flex; justify-content: space-around; align-items: center; text-align:center; width:60px; height:28px; font-size:21px; color:#293133;">
                      <i class="fas fa-share"></i>
                      <i class="fab fa-twitter"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-twitter-square" },
    });

    bm.add("whatsAppShare", {
      label: opt.whatsAppBlkLabelShare,
      category: opt.smSharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "https://wa.me/?text=$$$ViewLink$$$&text=",
          target: "_blank",
        },
        components: `<div style="border: 2px solid #293133; border-radius: 3px; display:flex; justify-content: space-around; align-items: center; text-align:center; width:60px; height:28px; font-size:21px; color:#293133;">
                      <i class="fas fa-share"></i>
                      <i class="fab fa-whatsapp"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-whatsapp" },
    });

    // conventional Shares
    bm.add("mail", {
      label: opt.mailBlkLabel,
      category: opt.sharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "mailto:example@mail.com?subject=Sieh%20dir%20dieses%20Inserat%20an&body=$$$ViewLink$$$",
        },
        components: `<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i class="fas fa-envelope-square"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-envelope-square" },
    });

    bm.add("sms", {
      label: opt.smsBlkLabel,
      category: opt.sharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "sms:?body=Sieh%20dir%20dieses%20Inserat%20an%20$$$ViewLink$$$",
        },
        components: `<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i class="fas fa-sms"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-comment" },
    });

    bm.add("print", {
      label: opt.printBlkLabel,
      category: opt.sharesCategoryLabel,
      content: {
        type: "link",
        style: {
          display: "inline-block",
          margin: "3px",
          "text-decoration": "none",
        },
        attributes: {
          href: "javascript:if(window.print)window.print()",
        },
        components: `<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#293133;">
                      <i class="fas fa-print"></i>
                    </div>`,
      },
      attributes: { class: "fa fa-print" },
    });
  };
});
