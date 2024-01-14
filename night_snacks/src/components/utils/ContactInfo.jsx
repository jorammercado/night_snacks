import {
    ContactWrapper,
    ContactSection,
    ContactDescription,
    ContactItem,
    Divider,
    InfoWrapper,
    AboutWrapper,
    AboutHeader,
    AboutContent
} from '../../styles/portalElements'
const ContactInfo = ({ currentUser }) => {
    return (
        <InfoWrapper>
            <ContactWrapper>
                <ContactSection>
                    <ContactItem>
                        <ContactDescription>Full Name:</ContactDescription>
                        {currentUser.firstname} {currentUser.lastname}
                    </ContactItem>
                    <ContactItem>
                        <ContactDescription>Email:</ContactDescription>
                        {currentUser.email}
                    </ContactItem>
                </ContactSection>
            </ContactWrapper>
            <Divider />
            <AboutWrapper>
                <AboutHeader>
                    About Me:
                </AboutHeader>
                <AboutContent>
                    The company itself is a very successful company
                </AboutContent>
            </AboutWrapper>
        </InfoWrapper>
    )
}
export default ContactInfo;