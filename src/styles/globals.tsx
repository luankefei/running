import { css, Global } from "@emotion/react";

const Styles = (
  <Global
    styles={css`
      @font-face {
        font-family: Infra;
        font-weight: 400;
        src: url(/font/InfraRegular.otf);
        /* src: url(/font/InfraLight.otf); */
      }

      @font-face {
        font-family: Infra;
        font-weight: 500;
        src: url(/font/InfraMedium.otf);
      }

      body {
        background: radial-gradient(
            19.49% 51.33% at 87.5% 86.78%,
            rgba(0, 253, 0, 0.05) 0%,
            rgba(23, 229, 23, 0) 100%
          ),
          radial-gradient(
            49.18% 65.7% at 0% 16.75%,
            rgba(255, 237, 121, 0.2) 0%,
            rgba(255, 237, 121, 2e-5) 100%
          ),
          radial-gradient(
            86.67% 29.19% at 91.33% 8.44%,
            rgba(85, 210, 255, 0.15) 0%,
            rgba(164, 255, 166, 1.5e-5) 100%
          ),
          #f7f7f7;
        font-family: Infra, Arial, Helvetica, sans-serif;
        font-style: normal;

        &::after {
          position: absolute;
          width: 0;
          height: 0;
          z-index: -1;
          overflow: hidden;
          content: url("/icon/icon_more_active.png")
            url("/icon/icon_group_active.png");
        }
      }

      ul {
        padding-left: 0;
      }

      textarea:focus,
      input:focus {
        outline: none;
      }

      .pointer {
        cursor: pointer;
      }

      // antd message

      /* .ant-message {
        top: 88px;
      } */

      /* .copy { */
      .ant-message-notice-content {
        color: #07c160;
        font-size: 17px;
        font-weight: 600;
        /* padding: 10px; */
        background: #e6f9ef;
        border-radius: 8px;
        width: 463px;

        .ant-message-success {
          .anticon {
            color: #07c160;
          }
        }
      }
      /* } */

      .ant-badge-count {
        z-index: 10;
      }

      .ant-switch {
        background-color: #f4f4f4;
      }

      .ant-switch-checked {
        background-color: #00d82b;
      }

      .ant-switch-handle::before {
        box-shadow: none;
      }
    `}
  />
);

export default Styles;
