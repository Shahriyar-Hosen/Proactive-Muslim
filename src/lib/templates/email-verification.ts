export const emailVerificationTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New Template</title>
    <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css2?family=Imprima&display=swap"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-menu td {
        border: 0;
      }
      .es-menu td a img {
        display: inline !important;
        vertical-align: middle;
      }
      s {
        text-decoration: line-through;
      }
      ul,
      ol {
        font-family: Imprima, Arial, sans-serif;
        padding: 0px 0px 0px 40px;
        margin: 15px 0px;
      }
      ul li {
        color: rgb(45, 49, 66);
      }
      ol li {
        color: rgb(45, 49, 66);
      }
      li {
        margin: 0px 0px 15px;
        font-size: 18px;
      }
      .es-menu td a {
        font-family: Imprima, Arial, sans-serif;
        text-decoration: none;
        display: block;
      }
      .es-header {
        background-color: transparent;
        background-repeat: repeat;
        background-position: center top;
      }
      .es-header-body {
        background-color: rgb(239, 239, 239);
      }
      .es-header-body p {
        color: rgb(45, 49, 66);
        font-size: 14px;
      }
      .es-header-body a {
        color: rgb(45, 49, 66);
        font-size: 14px;
      }
      .es-infoblock p {
        font-size: 12px;
        color: rgb(204, 204, 204);
      }
      .es-infoblock a {
        font-size: 12px;
        color: rgb(204, 204, 204);
      }
      h2 {
        font-size: 36px;
        font-style: normal;
        font-weight: bold;
        line-height: 120%;
        color: rgb(45, 49, 66);
      }
      h4 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: rgb(51, 51, 51);
      }
      h6 {
        font-size: 16px;
        font-style: normal;
        font-weight: normal;
        line-height: 120%;
        color: rgb(51, 51, 51);
      }
      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 48px;
      }
      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 36px;
      }
      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 28px;
      }
      .es-header-body h4 a,
      .es-content-body h4 a,
      .es-footer-body h4 a {
        font-size: 24px;
      }
      .es-header-body h5 a,
      .es-content-body h5 a,
      .es-footer-body h5 a {
        font-size: 20px;
      }
      .es-header-body h6 a,
      .es-content-body h6 a,
      .es-footer-body h6 a {
        font-size: 16px;
      }
      .es-button img {
        display: inline-block;
        vertical-align: middle;
      }
      .es-fw,
      .es-fw .es-button {
        display: block;
      }
      .es-il,
      .es-il .es-button {
        display: inline-block;
      }
      .es-text-ltr h1,
      .es-text-ltr h2,
      .es-text-ltr h3,
      .es-text-ltr h4,
      .es-text-ltr h5,
      .es-text-ltr h6,
      .es-text-ltr input,
      .es-text-ltr label,
      .es-text-ltr textarea,
      .es-text-ltr p,
      .es-text-ltr ol,
      .es-text-ltr ul,
      .es-text-ltr .es-menu a,
      .es-text-ltr .es-table {
        direction: ltr;
      }
      .es-text-rtl ol,
      .es-text-rtl ul {
        padding: 0px 40px 0px 0px;
      }
      .es-text-ltr ul,
      .es-text-ltr ol {
        padding: 0px 0px 0px 40px;
      }
      .es-p-default {
        padding-top: 20px;
        padding-right: 40px;
        padding-bottom: 0px;
        padding-left: 40px;
      }
      @media only screen and (max-width: 600px) {
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .es-social td {
          padding-bottom: 10px;
        }
        .h-auto {
          height: auto !important;
        }
        a.es-button,
        button.es-button {
          border-top-width: 15px !important;
          border-bottom-width: 15px !important;
        }
        .es-text-1994,
        .es-text-1994 p,
        .es-text-1994 a,
        .es-text-1994 h1,
        .es-text-1994 h2,
        .es-text-1994 h3,
        .es-text-1994 h4,
        .es-text-1994 h5,
        .es-text-1994 h6,
        .es-text-1994 ul,
        .es-text-1994 ol,
        .es-text-1994 li,
        .es-text-1994 span,
        .es-text-1994 sup,
        .es-text-1994 sub,
        .es-text-1994 u,
        .es-text-1994 b,
        .es-text-1994 strong,
        .es-text-1994 em,
        .es-text-1994 i {
          font-size: 36px !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #ffffff"
    >
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ffffff"></v:fill> </v:background
      ><![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #ffffff;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#bcb8b1"
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 20px;
                          padding-right: 40px;
                          padding-bottom: 20px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://proactive-muslim.vercel.app"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://ffznwei.stripocdn.email/content/guids/CABINET_055ba03e85e991c70304fecd78a2dceaf6b3f0bc1b0eb49336463d3599679494/images/vector.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          font-size: 18px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        height="60"
                                        title="Logo"
                                        width="38"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      border-radius: 20px 20px 0 0;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 40px;
                          padding-left: 40px;
                          padding-top: 40px;
                        "
                      >
                        <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr>
    <td style="width:115px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 115px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://proactive-muslim.vercel.app"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                      ><img
                                        src="https://ffznwei.stripocdn.email/content/guids/CABINET_ee77850a5a9f3068d9355050e69c76d26d58c3ea2927fa145f0d7a894e624758/images/group_4076323.png"
                                        alt="Confirm email"
                                        style="
                                          display: block;
                                          font-size: 18px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          border-radius: 100px;
                                        "
                                        title="Confirm email"
                                        width="80"
                                        height="80"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:5px"></td><td style="width:400px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 400px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    class="es-text-1994 es-text-rtl"
                                    dir="rtl"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h1
                                      align="left"
                                      style="
                                        margin: 0;
                                        font-family: Imprima, Arial, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 48px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 58px !important;
                                        color: #00114f;
                                        direction: rtl;
                                        /* margin-right: 40px; */
                                        white-space: nowrap;
                                      "
                                      class="es-m-txt-c"
                                    >
                                      Proactive Muslim​
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 400px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    class="h-auto es-text-rtl"
                                    height="30.6"
                                    valign="middle"
                                    dir="rtl"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      align="left"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 22px !important;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 18px;
                                        direction: rtl;
                                        white-space: nowrap;
                                      "
                                    >
                                      Verify your Email
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 20px;
                          padding-right: 40px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                bgcolor="#fafafa"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  background-color: #fafafa;
                                  border-radius: 10px;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 20px; margin: 0"
                                  >
                                    <h3
                                      style="
                                        margin: 0;
                                        font-family: Imprima, Arial, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 28px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 34px;
                                        color: #2d3142;
                                      "
                                    >
                                      Welcome, {{name}}
                                    </h3>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 27px;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                    >
                                      <br />
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 27px;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                    >
                                      You're receiving this message because you
                                      recently signed up for a account.<br /><br />Confirm
                                      your email address by clicking the button
                                      below. This step adds extra security to
                                      your account by verifying you own this
                                      email.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 40px;
                          padding-left: 40px;
                          padding-top: 30px;
                          padding-bottom: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <span
                                      class="es-button-border msohide"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #01af12;
                                        border-width: 0px;
                                        display: block;
                                        border-radius: 30px;
                                        width: auto;
                                        mso-hide: all;
                                        mso-border-alt: 10px;
                                      "
                                      ><a
                                        href="{{url}}"
                                        class="es-button msohide"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 22px;
                                          padding: 15px 20px 15px 20px;
                                          display: block;
                                          background: #01af12;
                                          border-radius: 30px;
                                          font-family: Imprima, Arial,
                                            sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 26px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #01af12;
                                          mso-hide: all;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          border-color: #7630f3;
                                        "
                                        >Confirm email</a
                                      >
                                    </span>
                                    <!--<![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 40px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 520px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 27px !important;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 18px;
                                      "
                                    >
                                      Thanks,
                                    </p>
                                    <h5
                                      style="
                                        margin: 0;
                                        font-family: Imprima, Arial, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 30px !important;
                                        color: #333333;
                                      "
                                    >
                                      <strong>Proactive Muslim</strong>
                                    </h5>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 40px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #666666;
                                            background: unset;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-content"
              align="center"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#efefef"
                    class="es-content-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #efefef;
                      border-radius: 0 0 20px 20px;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr>
                      <td
                        class="esdev-adapt-off"
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 20px;
                          padding-right: 40px;
                          padding-bottom: 20px;
                          padding-left: 40px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="esdev-mso-table"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            width: 520px;
                          "
                        >
                          <tr>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                align="left"
                                class="es-left"
                                role="none"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 0; margin: 0; width: 47px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          class="es-m-txt-l"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            font-size: 0px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://proactive-muslim.vercel.app"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #2d3142;
                                              font-size: 18px;
                                            "
                                            ><img
                                              src="https://ffznwei.stripocdn.email/content/guids/CABINET_ee77850a5a9f3068d9355050e69c76d26d58c3ea2927fa145f0d7a894e624758/images/group_4076325.png"
                                              alt="Demo"
                                              style="
                                                display: block;
                                                font-size: 18px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                              width="47"
                                              title="Demo"
                                              height="47"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td style="padding: 0; margin: 0; width: 20px"></td>
                            <td
                              class="esdev-mso-td"
                              valign="top"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="es-right"
                                align="right"
                                role="none"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 0; margin: 0; width: 453px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          style="padding: 0; margin: 0"
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              mso-line-height-rule: exactly;
                                              font-family: Imprima, Arial,
                                                sans-serif;
                                              line-height: 24px;
                                              letter-spacing: 0;
                                              color: #2d3142;
                                              font-size: 16px;
                                            "
                                          >
                                            This link expire in 24 hours. If you
                                            have questions,
                                            <a
                                              target="_blank"
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #2d3142;
                                                font-size: 16px;
                                              "
                                              href="https://proactive-muslim.vercel.app"
                                              >we're here to help</a
                                            >
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#bcb8b1"
                    class="es-footer-body"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 20px;
                          padding-bottom: 30px;
                          padding-left: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      src="https://proactive-muslim.vercel.app/icon.png"
                                      alt="logo"
                                      style="
                                        display: block;
                                        font-size: 12px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                      title="logo"
                                      height="60"
                                      width="38"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-c"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 10px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 5px;
                                          "
                                        >
                                          <img
                                            src="https://ffznwei.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png"
                                            alt="X"
                                            title="X.com"
                                            height="24"
                                            width="24"
                                            style="
                                              display: block;
                                              font-size: 18px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 5px;
                                          "
                                        >
                                          <img
                                            src="https://ffznwei.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                            alt="Fb"
                                            title="Facebook"
                                            height="24"
                                            width="24"
                                            style="
                                              display: block;
                                              font-size: 18px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="padding: 0; margin: 0"
                                        >
                                          <img
                                            src="https://ffznwei.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png"
                                            alt="In"
                                            title="Linkedin"
                                            height="24"
                                            width="24"
                                            style="
                                              display: block;
                                              font-size: 18px;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                            "
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 13px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href="https://proactive-muslim.vercel.app"
                                      ></a
                                      ><a
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href="https://proactive-muslim.vercel.app"
                                        >Privacy Policy</a
                                      ><a
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 13px;
                                        "
                                        href="https://proactive-muslim.vercel.app"
                                      ></a>
                                      •
                                      <a
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: none;
                                          color: #2d3142;
                                          font-size: 14px;
                                        "
                                        href="https://proactive-muslim.vercel.app"
                                        >Unsubscribe</a
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: Imprima, Arial, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #2d3142;
                                        font-size: 14px;
                                      "
                                    >
                                      Copyright © 2024 Company
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

`;
