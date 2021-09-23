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
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" class="button">${opt.buttonApplyBlkText}</a>`,
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
        style: {
          height: '350px',
          width: '615px'
        }
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

    // Social Media blocks

    bm.add("facebook", {
      label: opt.facebookBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      content: {
        type: "link",
        attributes: {
          href: "https://facebook.com/",
          style: "display: inline-block; margin: 3px;",
        },
        components: [
          {
            type: "image",
            draggable: false,
            style: {
              width: "28px",
              height: "28px",
            },
            attributes: {
              src: "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='facebook-square' class='svg-inline--fa fa-facebook-square fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#373d49' d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'></path></svg>",
              alt: "Facebook site",
            },
          },
        ],
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
        },
        components: [
          {
            type: "image",
            draggable: false,
            style: {
              width: "28px",
              height: "28px",
            },
            attributes: {
              src: "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='instagram-square' class='svg-inline--fa fa-instagram-square fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#373d49' d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'></path></svg>",
              alt: "Instagram site",
            },
          },
        ],
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
        },
        components: [
          {
            type: "image",
            draggable: false,
            style: {
              width: "28px",
              height: "28px",
            },
            attributes: {
              src: "<svg style='fill:#1877f2;' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='linkedin' class='svg-inline--fa fa-linkedin fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#373d49' d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path></svg>",
              alt: "linkedIn site",
            },
          },
        ],
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
        },
        components: [
          {
            type: "image",
            draggable: false,
            style: {
              width: "28px",
              height: "28px",
            },
            attributes: {
              src: "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='xing-square' class='svg-inline--fa fa-xing-square fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#373d49' d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM140.4 320.2H93.8c-5.5 0-8.7-5.3-6-10.3l49.3-86.7c.1 0 .1-.1 0-.2l-31.4-54c-3-5.6.2-10.1 6-10.1h46.6c5.2 0 9.5 2.9 12.9 8.7l31.9 55.3c-1.3 2.3-18 31.7-50.1 88.2-3.5 6.2-7.7 9.1-12.6 9.1zm219.7-214.1L257.3 286.8v.2l65.5 119c2.8 5.1.1 10.1-6 10.1h-46.6c-5.5 0-9.7-2.9-12.9-8.7l-66-120.3c2.3-4.1 36.8-64.9 103.4-182.3 3.3-5.8 7.4-8.7 12.5-8.7h46.9c5.7-.1 8.8 4.7 6 10z'></path></svg>",
              alt: "Xing site",
            },
          },
        ],
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
        },
        components: [
          {
            type: "image",
            draggable: false,
            style: {
              width: "28px",
              height: "28px",
            },
            attributes: {
              src: "<svg aria-hidden='true' focusable='false' data-prefix='fab' data-icon='twitter-square' class='svg-inline--fa fa-twitter-square fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='#373d49' d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z'></path></svg>",
              alt: "Twitter site",
            },
          },
        ],
      },
      attributes: { class: "fa fa-twitter-square" },
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
  };
});
