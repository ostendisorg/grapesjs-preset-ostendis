define(function () {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;

    bm.getAll().reset();

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

    // Default blocks
    bm.add("applyButton", {
      label: opt.buttonApplyBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "gjs-fonts gjs-f-button" },
      content: `<a data-gjs-type="link" href="$$$ApplyLink$$$" class="button">${opt.buttonApplyBlkText}</a>`,
    });

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

    bm.add("ulist", {
      label: opt.ulistBlkLabel,
      category: opt.categoryLabel,
      name: opt.ulistBlkLabel,
      attributes: { class: "fa fa-list-ul" },
      content: { type: "ulist" },
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

    bm.add("link", {
      label: opt.linkBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa fa-link" },
      content: {
        type: "link",
        content: "Link",
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

    bm.add("divider", {
      label: opt.dividerBlkLabel,
      category: opt.categoryLabel,
      content: '<hr style="border-top: 1px solid #2b303b;">',
      attributes: { class: "gjs-fonts gjs-f-divider" },
    });
  };
});
