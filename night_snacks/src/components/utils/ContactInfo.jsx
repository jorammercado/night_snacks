import {
    ContactWrapper,
    ContactSection,
    ContactDescription,
    ContactItem,
    ContactItem2,
    Divider,
    InfoWrapper,
    AboutWrapper,
    AboutHeader,
    AboutContent,
    ProfileNavBottom,
    LoginButton2
} from '../../styles/portalElements'
import profile from "../../assets/profile.svg"
import { useNavigate, Link } from "react-router-dom"
import "./ContactInfo.css"
const ContactInfo = ({ currentUser }) => {
    const navigate = useNavigate()

    const handleDelete = () => {
        const httpOptions = { method: "DELETE" }
        fetch(`${API}/users/${currentUser.user_id}`, httpOptions)
            .then(() => navigate("/login"))
            .catch((error) => console.log(error))
    }

    return (
        <InfoWrapper>
            <ContactWrapper>
                <ContactItem2>
                    {
                        currentUser.profile_img === "profile image" ?
                            <img src={profile} /> :
                            <img className="pic" src={currentUser.profile_img} />
                    }
                </ContactItem2>
                <ContactSection>
                    <ContactItem>
                        <ContactDescription>
                            Full Name:
                        </ContactDescription>
                        {currentUser.firstname} {currentUser.lastname}
                    </ContactItem>
                    <br></br>
                    <ContactItem>
                        <ContactDescription>
                            Email:
                        </ContactDescription>
                        {currentUser.email}
                    </ContactItem>
                    <br></br>
                    <ContactItem>
                        <ContactDescription>
                            Username:
                        </ContactDescription>
                        {currentUser.username}
                    </ContactItem>
                    <br></br>
                    <ContactItem>
                        <ContactDescription>
                            DOB:
                        </ContactDescription>
                        {currentUser.dob}
                    </ContactItem>
                    <br></br>
                    <ContactItem>
                        <ContactDescription>
                            Member Since:
                        </ContactDescription>
                        {currentUser.registration_date.split("T")[0]}
                    </ContactItem>

                </ContactSection>
            </ContactWrapper>
            <Divider />
            <AboutWrapper>
                <AboutHeader>
                    About Me:
                </AboutHeader>
                <AboutContent>
                    {currentUser.about}
                </AboutContent>
            </AboutWrapper>

            <ProfileNavBottom>
                <LoginButton2 onClick={() => { navigate(`/users/${currentUser.user_id}/profile/edit`) }}>  edit </LoginButton2>
                <LoginButton2 onClick={handleDelete}>delete account</LoginButton2>

            </ProfileNavBottom>
        </InfoWrapper>
    )
}
export default ContactInfo