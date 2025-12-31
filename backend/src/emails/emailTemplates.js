export function createWelcomeEmailTemplate(name, clientURL) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Chatify</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #F4F7FB;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #2B2D42;
">

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" style="padding: 50px 16px;">

      <!-- Card -->
      <table width="100%" cellpadding="0" cellspacing="0"
        style="
          max-width: 620px;
          background-color: #FFFFFF;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(108, 99, 255, 0.15);
        ">

        <!-- Header -->
        <tr>
          <td style="
            background: linear-gradient(135deg, #A18CD1, #FBC2EB);
            padding: 50px 30px 45px;
            text-align: center;
          ">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
              alt="Messenger"
              width="84"
              height="84"
              style="
                display: block;
                margin: 0 auto 22px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.85);
                padding: 10px;
              "
            />
            <h1 style="
              margin: 0;
              font-size: 30px;
              font-weight: 600;
              color: #FFFFFF;
              letter-spacing: 0.5px;
            ">
              Welcome to Messenger
            </h1>
            <p style="
              margin: 14px 0 0;
              font-size: 16px;
              color: rgba(255, 255, 255, 0.95);
            ">
              Conversations that feel effortless ✨
            </p>
          </td>
        </tr>

        <!-- Content -->
        <tr>
          <td style="padding: 42px 36px;">

            <p style="
              font-size: 19px;
              font-weight: 600;
              margin: 0 0 14px;
              color: #6B6EF9;
            ">
              Hi ${name},
            </p>

            <p style="
              font-size: 15.8px;
              line-height: 1.75;
              margin: 0 0 28px;
              color: #6C757D;
            ">
              We’re genuinely happy to have you here. Messenger is designed to bring
              warmth, clarity, and ease to every conversation — whether it’s casual
              chats or meaningful connections.
            </p>

            <!-- Soft Feature Box -->
            <div style="
              background: linear-gradient(180deg, #FAFBFF, #F5F6FF);
              border-radius: 16px;
              padding: 26px 28px;
              margin-bottom: 36px;
              border: 1px solid #EEF0FF;
            ">
              <p style="
                margin: 0 0 16px;
                font-size: 16px;
                font-weight: 600;
                color: #2B2D42;
              ">
                🌸 Your first steps
              </p>

              <ul style="
                margin: 0;
                padding-left: 18px;
                font-size: 15px;
                line-height: 1.7;
                color: #5F6368;
              ">
                <li>Personalize your profile</li>
                <li>Add people you care about</li>
                <li>Start beautiful conversations</li>
                <li>Share moments instantly</li>
              </ul>
            </div>

            <!-- CTA -->
            <div style="text-align: center; margin-bottom: 36px;">
              <a
                href="${clientURL}"
                style="
                  display: inline-block;
                  padding: 15px 42px;
                  background: linear-gradient(135deg, #6B6EF9, #A18CD1);
                  color: #FFFFFF;
                  text-decoration: none;
                  border-radius: 999px;
                  font-size: 16px;
                  font-weight: 600;
                  letter-spacing: 0.4px;
                  box-shadow: 0 12px 25px rgba(107, 110, 249, 0.35);
                "
              >
                Open Messenger →
              </a>
            </div>

            <p style="
              font-size: 14.5px;
              color: #6C757D;
              margin: 0 0 6px;
            ">
              Need assistance? We’re always happy to help.
            </p>

            <p style="
              font-size: 14.5px;
              color: #6C757D;
              margin: 0;
            ">
              Enjoy the experience 💜
            </p>

            <p style="
              margin-top: 30px;
              font-size: 14px;
              color: #8D99AE;
            ">
              — The Messenger Team
            </p>

          </td>
        </tr>
      </table>

      <!-- Footer -->
      <p style="
        margin-top: 26px;
        font-size: 12px;
        color: #A0A6B1;
        text-align: center;
      ">
        © 2025 Messenger
        <br />
        <a href="#" style="color: #6B6EF9; text-decoration: none;">Privacy</a>
        ·
        <a href="#" style="color: #6B6EF9; text-decoration: none;">Terms</a>
        ·
        <a href="#" style="color: #6B6EF9; text-decoration: none;">Support</a>
      </p>

    </td>
  </tr>
</table>

</body>
</html>
`;
}