define(function () {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;
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
    
    var btnStyle = 'style=" display: block; padding: 10px 30px; margin: 10px auto; text-decoration: none;'+
                    'border: none; color: #fff; text-align: center; background-color: #4b75cd; border-radius: 0.25rem 0.25rem 0.25em 0.25rem;"';

    bm.add("applyButton", {
      label: opt.buttonApplyBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-button" },
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" target="_blank" role="button" `+  btnStyle + `>${opt.buttonApplyBlkText}</a>`,
      style: btnStyle,
    });

    bm.add("button", {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: `<a data-gjs-type="link" role="button" `+  btnStyle + `>Button</a>`,
      attributes: { class: "gjs-fonts gjs-f-button" },
      style: btnStyle,
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
      content: { type: "ulist" },
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
          height: "350px",
        },
      },
    });

    bm.add("map", {
      label: opt.mapBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-map-o" },
      content: {
        type: "map",
        style: {
          width: "100%",
          height: "350px",
        },
      },
    });

    bm.add("sect55", {
      label: opt.sect55BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b2" },
      content: `<div style="display:flex; flex-wrap: wrap; padding: 0.2rem 0">
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 280px; padding:20px;"></div>
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 280px; padding:20px;"></div>
       </div>`,
    });

    bm.add("sect37", {
      label: opt.sect37BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b37" },
      content: `<div style="display:flex; flex-wrap: wrap; padding: 0.2rem 0">
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 38.2%; min-width:200px; padding:20px;"></div>
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 61.8%; padding:20px;"></div>
       </div>`,
    });

    bm.add("sect333", {
      label: opt.sect333BlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-b3" },
      content: `<div style="display:flex; flex-wrap: wrap; padding: 0.2rem 0">
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 200px; padding:20px;"></div>
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 200px; padding:20px;"></div>
          <div style="flex-grow: 1; flex-shrink: 1; flex-basis: 200px; padding:20px;"></div>
       </div>`,
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

    bm.add("input-range", {
      label: opt.inputRangeBlkLabel,
      category: opt.categoryLabel,
      content: { type: "range" },
      attributes: { class: "fa fa-sliders" },
    });

    // Ostendis block icons
    var ostBlockTitleText = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48.238" viewBox="0 0 12.7 12.763"><path fill="none" stroke="currentColor" stroke-width=".523" d="M.262 2.59h12.177v8.113H.262z"/><path fill="currentColor" stroke="currentColor" stroke-width=".106" d="M1.536 8.474h9.632v.556H1.536zm0-1.053h9.632v.556H1.535zm0-1.053h9.63v.557h-9.63zm-.004-2.106h6.954v.973H1.532z"/></svg>';
    var ostBlockTitleList =
      '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48.238" viewBox="0 0 12.7 12.763"><path fill="none" stroke="currentColor" stroke-width=".523" d="M.262 2.59h12.177v8.113H.262z"/><path fill="currentColor" stroke="currentColor" stroke-width=".1" d="M2.058 8.752a.238.238 0 0 1-.238.238.238.238 0 0 1-.238-.238.238.238 0 0 1 .238-.238.238.238 0 0 1 .238.238zm0-1.053a.238.238 0 0 1-.238.238.238.238 0 0 1-.238-.238.238.238 0 0 1 .238-.238.238.238 0 0 1 .238.238zm0-1.053a.238.238 0 0 1-.238.238.238.238 0 0 1-.238-.238.238.238 0 0 1 .238-.238.238.238 0 0 1 .238.238zm.651 1.828h8.459v.556H2.709zm0-1.053h8.459v.556H2.709zm0-1.053h8.459v.556H2.709zM1.532 4.262h6.954v.973H1.532z"/></svg>';

    // Ostendis blocks
    bm.add("ost-organization", {
      label: opt.textBlkLabelOrg,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        name: opt.textBlkLabelOrg,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleOrg + "</h3>",
            attributes: { "data-ost-type": "organizationHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentOrg,
            attributes: { "data-ost-type": "organization" },
          },
        ],
      },
    });

    bm.add("ost-organization-list", {
      label: opt.textBlkLabelOrgList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        name: opt.textBlkLabelOrgList,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleOrg + "</h3>",
            attributes: { "data-ost-type": "organizationHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "organization" },
          },
        ],
      },
    });

    bm.add("ost-introduction", {
      label: opt.textBlkLabelIntro,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        name: opt.textBlkLabelIntro,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleIntro + "</h3>",
            attributes: { "data-ost-type": "introductionHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentIntro,
            attributes: { "data-ost-type": "introduction" },
          },
        ],
      },
    });

    bm.add("ost-introduction-list", {
      label: opt.textBlkLabelIntroList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        name: opt.textBlkLabelIntroList,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleIntro + "</h3>",
            attributes: { "data-ost-type": "introductionHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "introduction" },
          },
        ],
      },
    });

    bm.add("ost-description", {
      label: opt.textBlkLabelDesc,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        name: opt.textBlkLabelDesc,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleDesc + "</h3>",
            attributes: { "data-ost-type": "descriptionHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentDesc,
            attributes: { "data-ost-type": "description" },
          },
        ],
      },
    });

    bm.add("ost-description-list", {
      label: opt.textBlkLabelDescList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        name: opt.textBlkLabelDescList,
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleDesc + "</h3>",
            attributes: { "data-ost-type": "descriptionHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "description" },
          },
        ],
      },
    });

    bm.add("ost-tasks", {
      label: opt.textBlkLabelTasks,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleTasks + "</h3>",
            attributes: { "data-ost-type": "tasksHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentTasks,
            attributes: { "data-ost-type": "tasks" },
          },
        ],
      },
    });

    bm.add("ost-tasks-list", {
      label: opt.textBlkLabelTasksList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleTasks + "</h3>",
            attributes: { "data-ost-type": "tasksHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "tasks" },
          },
        ],
      },
    });

    bm.add("ost-requirements", {
      label: opt.textBlkLabelReq,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleReq + "</h3>",
            attributes: { "data-ost-type": "requirementsHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentReq,
            attributes: { "data-ost-type": "requirements" },
          },
        ],
      },
    });

    bm.add("ost-requirements-list", {
      label: opt.textBlkLabelReqList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleReq + "</h3>",
            attributes: { "data-ost-type": "requirementsHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "requirements" },
          },
        ],
      },
    });

    bm.add("ost-benefits", {
      label: opt.textBlkLabelBenefits,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleBenefits + "</h3>",
            attributes: { "data-ost-type": "benefitsHeading" },
          },
          {
            type: "text",
            content: opt.textBlkContentBenefits,
            attributes: { "data-ost-type": "benefits" },
          },
        ],
      },
    });

    bm.add("ost-benefits-list", {
      label: opt.textBlkLabelBenefitsList,
      category: "Ostendis",
      media: ostBlockTitleList,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleBenefits + "</h3>",
            attributes: { "data-ost-type": "benefitsHeading" },
          },
          {
            type: "ulist",
            attributes: { "data-ost-type": "benefits" },
          },
        ],
      },
    });

    bm.add("ost-contact", {
      label: opt.textBlkLabelContact,
      category: "Ostendis",
      media: ostBlockTitleText,
      content: {
        components: [
          {
            type: "text",
            content: '<h3 style="margin-bottom:7px">' + opt.textBlkTitleContact + "</h3>",
            attributes: { "data-ost-type": "contactHeading" },
          },
          {
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
    var instagramIcon = `<svg height="50" width="42" version="1.1" viewBox="0 0 44.8 51.2" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
     <path d="M 22.4,20.266 A 5.334,5.334 0 1 0 27.736,25.6 5.338,5.338 0 0 0 22.4,20.266 Z m 12.471,-4.1 A 5.4,5.4 0 0 0 31.83,13.125 c -2.1,-0.829 -7.1,-0.643 -9.43,-0.643 -2.33,0 -7.325,-0.193 -9.431,0.643 a 5.4,5.4 0 0 0 -3.041,3.041 c -0.828,2.1 -0.643,7.105 -0.643,9.433 0,2.328 -0.185,7.327 0.647,9.434 a 5.4,5.4 0 0 0 3.041,3.041 c 2.1,0.829 7.1,0.643 9.431,0.643 2.331,0 7.324,0.193 9.43,-0.643 a 5.4,5.4 0 0 0 3.041,-3.041 c 0.835,-2.1 0.643,-7.105 0.643,-9.433 0,-2.328 0.192,-7.326 -0.643,-9.433 z M 22.4,33.8 a 8.2,8.2 0 1 1 8.2,-8.2 8.19,8.19 0 0 1 -8.2,8.2 z m 8.538,-14.83 a 1.914,1.914 0 1 1 1.913,-1.914 1.91,1.91 0 0 1 -1.909,1.918 z M 40,3.2 H 4.8 A 4.8,4.8 0 0 0 0,8 V 43.2 A 4.8,4.8 0 0 0 4.8,48 H 40 a 4.8,4.8 0 0 0 4.8,-4.8 V 8 A 4.8,4.8 0 0 0 40,3.2 Z m -1.712,29 c -0.129,2.563 -0.714,4.834 -2.585,6.7 -1.871,1.866 -4.14,2.463 -6.7,2.585 -2.641,0.149 -10.559,0.149 -13.2,0 C 13.24,41.356 10.977,40.77 9.103,38.9 7.229,37.03 6.64,34.758 6.518,32.2 6.369,29.558 6.369,21.639 6.518,19 c 0.129,-2.563 0.707,-4.834 2.585,-6.7 1.878,-1.866 4.147,-2.456 6.7,-2.578 2.641,-0.149 10.559,-0.149 13.2,0 2.563,0.129 4.833,0.715 6.7,2.585 1.867,1.87 2.463,4.142 2.585,6.705 0.149,2.632 0.149,10.544 0,13.188 z"
     style="stroke-width:.1" stroke="currentColor" fill="currentColor" /></svg>`;
    var twitterXIcon =  `<svg height="50" width="42" version="1.1" viewBox="0 0 44.8 51.2" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
     <path d="M 6.4,3.2 C 2.87,3.2 0,6.07 0,9.6 v 32 C 0,45.13 2.87,48 6.4,48 h 32 c 3.53,0 6.4,-2.87 6.4,-6.4 V 9.6 C 44.8,6.07 41.93,3.2 38.4,3.2 Z M 36.11,11.6 25.73,23.46 37.94,39.6 H 28.38 L 20.9,29.81 12.33,39.6 H 7.58 L 18.68,26.91 6.97,11.6 h 9.8 l 6.77,8.95 7.82,-8.95 z M 32.33,36.76 15.34,14.29 h -2.83 l 17.18,22.47 h 2.63 z" 
     style="stroke-width:.1" fill="currentColor" stroke="currentColor"/></svg>`;
    var youtubeIcon = `<svg height="50" width="42" version="1.1" viewBox="0 0 44.8 51.2" xmlns="http://www.w3.org/2000/svg">
    <path d="m18.68 20.21 9.52 5.41-9.52 5.41zm26.12-12.21v35.2c0 2.65-2.15 4.8-4.8 4.8h-35.2c-2.65 0-4.8-2.15-4.8-4.8v-35.2c0-2.65 2.15-4.8 4.8-4.8h35.2c2.65 0 4.8 2.15 4.8 4.8zm-4.2 17.63s0-5.96-0.76-8.82c-0.42-1.58-1.65-2.82-3.22-3.24-2.83-0.77-14.22-0.77-14.22-0.77s-11.39 0-14.22 0.77c-1.57 0.42-2.8 1.66-3.22 3.24-0.76 2.85-0.76 8.82-0.76 8.82s0 5.96 0.76 8.82c0.42 1.58 1.65 2.77 3.22 3.19 2.83 0.76 14.22 0.76 14.22 0.76s11.39 0 14.22-0.77c1.57-0.42 2.8-1.61 3.22-3.19 0.76-2.85 0.76-8.81 0.76-8.81z"
     stroke-width=".1" fill="currentColor" stroke="currentColor"/></svg>`;

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
      media: instagramIcon,
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
    });

    bm.add("youtube", {
      label: opt.youtubeBlkLabelSite,
      category: opt.smSitesCategoryLabel,
      media: youtubeIcon,
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
                       <i class="fa-brands fa-square-youtube"></i>
                    </div>`,
      },
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
      media: twitterXIcon,
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
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </div>`,
      },
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
      media: twitterXIcon,
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
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </div>`,
      }
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
          href: "https://wa.me/?text=$$$ViewLink$$$",
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
