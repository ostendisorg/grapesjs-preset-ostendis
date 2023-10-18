define(function () {
  return (opt = {}) => {
    let editor = opt.editor;
    let bm = editor.BlockManager;
    bm.getAll().reset();

    bm.add("applyQrCode", {
      label: opt.applyQrCodeBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-solid fa-qrcode" },
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
      attributes: { class: "fa-solid fa-qrcode" },
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
      attributes: { class: "fa-solid fa-t" },
      content: {
        type: "text",
        content: "Text",
      },
    });

    bm.add("text2", {
      label: opt.textBlkLabelWithSpace,
      category: opt.categoryLabel,
      attributes: { class: "fa-solid fa-t" },
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
      attributes: { class: "fa-solid fa-list-ul" },
      content: { type: "ulist" },
    });

    bm.add("icon", {
      label: opt.iconBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-regular fa-face-smile" },
      content: { type: "icon" },
    });

    bm.add("image", {
      label: opt.imageBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-regular fa-image" },
      content: {
        type: "image",
        activeOnRender: 1,
      },
    });

    bm.add("video", {
      label: opt.videoBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-brands fa-youtube" },
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
      attributes: { class: "fa-solid fa-map-location-dot" },
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
      attributes: { class: "fa-solid fa-quote-right" },
    });

    bm.add("link", {
      label: opt.linkBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-solid fa-link" },
      content: {
        type: "link",
        content: "Link",
      },
    });

    bm.add("link-block", {
      label: opt.linkBlockBlkLabel,
      category: opt.categoryLabel,
      attributes: { class: "fa-solid fa-link" },
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
      attributes: { class: "fa-solid fa-sliders" },
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
                      <i aria-hidden="true" class="fa-brands fa-square-facebook"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-facebook" },
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
      attributes: { class: "fa-brands fa-square-instagram"},
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
                       <i class="fa-brands fa-square-youtube"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-youtube" },
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
      attributes: { class: "fa-brands fa-linkedin" },
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
                      <i aria-hidden="true" class="fa-brands fa-square-xing"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-xing" },
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
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-x-twitter" },
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
                      <i class="fa-solid fa-share"></i>
                      <i class="fa-brands fa-facebook-f"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-facebook" },
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
                      <i class="fa-solid fa-share"></i>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-linkedin" },
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
                      <i class="fa-solid fa-share"></i>
                      <i class="fa-brands fa-xing"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-xing" },
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
                      <i class="fa-solid fa-share"></i>
                      <i class="fa-brands fa-x-twitter"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-x-twitter" },
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
                      <i class="fa-solid fa-share"></i>
                      <i class="fa-brands fa-whatsapp"></i>
                    </div>`,
      },
      attributes: { class: "fa-brands fa-square-whatsapp" },
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
                      <i class="fa-solid fa-envelope"></i>
                    </div>`,
      },
      attributes: { class: "fa-solid fa-square-envelope" },
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
                      <i class="fa-solid fa-comment-sms"></i>
                    </div>`,
      },
      attributes: { class: "fa-solid fa-comment-sms" },
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
                      <i class="fa-solid fa-print"></i>
                    </div>`,
      },
      attributes: { class: "fa-solid fa-print" },
    });
  };
});
