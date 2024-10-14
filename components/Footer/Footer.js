import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Find me on</h2>
<div>
${Button("/public/icons/twitter.png", "Twitter")}
${Button("/public/icons/github.png", "GitHub")}
${Button("/public/icons/linkedin.png", "LinkedIn")}
${Button("/public/icons/telegram.png", "Telegram")}
</div>
`;