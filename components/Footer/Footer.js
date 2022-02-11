import { FooterContainer } from "./styles"

function Footer() {
    return (
        <FooterContainer>
            <div className="footer__logo"></div>
            <div className="footer__content">
                <p>Disney+ is a paid service, based on subscription and subject to terms and conditions. The Disney+ service is marketed by The Walt Disney Company (Brazil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo / SP - CEP 04578-903, Brazil and CNPJ / M 73.042.962 / 0004-20</p>
            </div>
            <div className="footer__content">
                <p>© Disney. All Rights Reserved.</p>
            </div>
        </FooterContainer>
    )
}

export default Footer