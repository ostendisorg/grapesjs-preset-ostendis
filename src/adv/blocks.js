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

    bm.add("applyButton", {
      label: opt.buttonApplyBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-button" },
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" target="_blank" class="button">${opt.buttonApplyBlkText}</a>`,
    });

    bm.add("applyQrCode", {
      label: opt.applyQrCodeBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-image" },
      content: {
        type: "image",
        editable: false,
        droppable: true,
        style: {
          "min-height": "100px",
          "min-width": "100px",
          width: "100px",
        },
        attributes: { src: "$$$ApplyQrCode$$$", alt: "QR code" },
      },
    });

    bm.add("button", {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: '<a data-gjs-type="link" class="button">Button</a>',
      attributes: { class: "gjs-fonts gjs-f-button" },
    });

    bm.add("sect100", {
      label: opt.sect100BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b1" },
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}"></td>
        </tr>
        </table>`,
    });

    bm.add("sect50", {
      label: opt.sect50BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b2" },
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 50%"></td>
          <td style="${cellStyleStr} width: 50%"></td>
        </tr>
        </table>`,
    });

    bm.add("sect30", {
      label: opt.sect30BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b3" },
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
        </tr>
        </table>`,
    });

    bm.add("sect37", {
      label: opt.sect37BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b37" },
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width:30%"></td>
          <td style="${cellStyleStr} width:70%"></td>
        </tr>
        </table>`,
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
      content:
        '<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
      attributes: { class: "gjs-fonts gjs-f-h1p" },
    });

    bm.add("image", {
      label: opt.imageBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-image" },
      content: {
        type: "image",
        style: { color: "black" },
        activeOnRender: 1,
      },
    });

    bm.add('video', {
      label: opt.videoBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: 'fa fa-youtube-play' },
      content: {
        type: 'video',
        src: 'https://www.ostendis.com/media/juice-success-story.mp4',
      }
    });

    bm.add('box', {
      label: 'Box',
      category: opt.categoryLabel,
      attributes: { class: 'gjs-fonts gjs-f-b1' },
      content: {
        type: 'box',
        style: {
          padding: '20px'
        }
      },
    });

    bm.add('quote', {
      label: opt.quoteBlkLabel,
      category: opt.categoryLabel,
      content:
        '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
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

    let gridItem = `<table class="grid-item-card">
        <tr>
          <td class="grid-item-card-cell">
            <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
            <table class="grid-item-card-body">
              <tr>
                <td class="grid-item-card-content">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;

    bm.add("grid-items", {
      label: opt.gridItemsBlkLabel,
      category: opt.categoryLabel,
      content: `<table class="grid-item-row">
        <tr>
          <td class="grid-item-cell2-l">${gridItem}</td>
          <td class="grid-item-cell2-r">${gridItem}</td>
        </tr>
      </table>`,
      attributes: { class: "fa fa-th" },
    });

    let listItem = `<table class="list-item">
        <tr>
          <td class="list-item-cell">
            <table class="list-item-content">
              <tr class="list-item-row">
                <td class="list-cell-left">
                  <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
                </td>
                <td class="list-cell-right">
                  <h1 class="card-title">Title here</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;

    bm.add("list-items", {
      label: opt.listItemsBlkLabel,
      category: opt.categoryLabel,
      content: listItem + listItem,
      attributes: { class: "fa fa-th-list" },
    });

    // OST ad blocks
    // let ostTraits = [
    //   'id',
    //   'title',
    //   {
    //     type: 'select',
    //     label: opt.textBlkOstType,
    //     name: 'data-ost-type',
    //     options: [
    //       { id: 'organization', name: 'organization'},
    //       { id: 'introduction', name: 'introduction'},
    //       { id: 'description', name: 'description'},
    //       { id: 'requirements', name: 'requirements'},
    //       { id: 'benefits', name: 'benefits'},
    //       { id: 'contact', name: 'contact'},
    //     ]
    //   }
    // ]

    bm.add("ost-organization", {
      label: opt.textBlkLabelOrg,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelOrg,
        type: "text",
        content: opt.textBlkContentOrg,
        //traits: ostTraits,
        attributes: { "data-ost-type": "organization" },
      },
    });

    bm.add("ost-intro", {
      label: opt.textBlkLabelIntro,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelIntro,
        type: "text",
        content: opt.textBlkContentIntro,
        //traits: ostTraits,
        attributes: { "data-ost-type": "introduction" },
      },
    });

    bm.add("ost-description", {
      label: opt.textBlkLabelDesc,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        type: "text",
        components: [
          {
            type: "text",
            content: "<strong>" + opt.textBlkTitleDesc + "</strong>",
          },
          {
            name: opt.textBlkLabelDesc,
            type: "text",
            content: opt.textBlkContentDesc,
            //traits: ostTraits,
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
            content: "<strong>" + opt.textBlkTitleTasks + "</strong>",
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
            content: "<strong>" + opt.textBlkTitleReq + "</strong>",
          },
          {
            name: opt.textBlkLabelReq,
            type: "text",
            content: opt.textBlkContentReq,
            //traits: ostTraits,
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
            content: "<strong>" + opt.textBlkTitleBenefits + "</strong>",
          },
          {
            name: opt.textBlkLabelBenefits,
            type: "text",
            content: opt.textBlkContentBenefits,
            //traits: ostTraits,
            attributes: { "data-ost-type": "benefits" },
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

    bm.add("ost-contact", {
      label: opt.textBlkLabelContact,
      category: "Ostendis",
      attributes: { class: "gjs-fonts gjs-f-hero" },
      content: {
        name: opt.textBlkLabelContact,
        type: "text",
        content: opt.textBlkContentContact,
        //traits: ostTraits,
        attributes: { "data-ost-type": "contact" },
      },
    });
        // Social Media blocks
        bm.add("facebook", {
          label: opt.facebookBlkLabelSite,
          category: opt.smSitesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://facebook.com/",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i aria-hidden="true" class="fab fa-facebook-square"></i></div>',
          },
          attributes: { class: "fa fa-facebook-square" },
        });
    
        bm.add("instagram", {
          label: opt.instagramBlkLabelSite,
          category: opt.smSitesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://instagram.com/",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i aria-hidden="true" class="fab fa-instagram-square"></i></div>',
          },
          attributes: { class: "fa fa-instagram" },
        });
    
        bm.add("linkedin", {
          label: opt.linkedinBlkLabelSite,
          category: opt.smSitesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://linkedin.com/",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i aria-hidden="true" class="fab fa-linkedin"></i></div>',
          },
          attributes: { class: "fa fa-linkedin-square" },
        });
    
        bm.add("xing", {
          label: opt.xingBlkLabelSite,
          category: opt.smSitesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://xing.com/",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i aria-hidden="true" class="fab fa-xing-square"></i></div>',
          },
          attributes: { class: "fa fa-xing-square" },
        });
    
        bm.add("twitter", {
          label: opt.twitterBlkLabelSite,
          category: opt.smSitesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://twitter.com/",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fab fa-twitter-square"></i></div>',
          },
          attributes: { class: "fa fa-twitter-square" },
        });
    
    
        // Social Media Share blocks
        bm.add("facebookShare", {
          label: opt.facebookBlkLabelShare,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://www.facebook.com/sharer/sharer.php?u=$$$ViewLink$$$",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fab fa-facebook-square"></i></div>',
          },
          attributes: { class: "fa fa-facebook-square" },
        });
    
        bm.add("linkedinShare", {
          label: opt.linkedinBlkLabelShare,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://www.linkedin.com/shareArticle?mini=true&url=$$$ViewLink$$$",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fab fa-linkedin"></i></div>',
          },
          attributes: { class: "fa fa-linkedin-square" },
        });
    
        bm.add("xingShare", {
          label: opt.xingBlkLabelShare,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://www.xing.com/spi/shares/new?url=$$$ViewLink$$$",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fab fa-xing-square"></i></div>',
          },
          attributes: { class: "fa fa-xing-square" },
        });
    
        bm.add("twitterShare", {
          label: opt.twitterBlkLabelShare,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "https://twitter.com/intent/tweet?url=$$$ViewLink$$$&text=",
              style: "display: inline-block; margin: 3px;",
              target: "_blank",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fab fa-twitter-square"></i></div>',
          },
          attributes: { class: "fa fa-twitter-square" },
        });
    
        bm.add("mail", {
          label: opt.mailBlkLabel,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "mailto:example@mail.com?subject=Sieh%20dir%20dieses%20Inserat%20an&body=$$$ViewLink$$$",
              style: "display: inline-block; margin: 3px;",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fas fa-envelope-square"></i></div>',
          },
          attributes: { class: "fa fa-envelope-square" },
        });
    
        bm.add("print", {
          label: opt.printBlkLabel,
          category: opt.smSharesCategoryLabel,
          content: {
            type: "link",
            attributes: {
              href: "javascript:if(window.print)window.print()",
              style: "display: inline-block; margin: 3px;",
            },
            components: '<div style="display:inline-block; text-align:center; width:28px; height:28px; font-size:28px; color:#1d66e6;"><i class="fas fa-file-pdf"></i></div>',
          },
          attributes: { class: "fa fa-file-pdf-o" },
        });
  };
});
