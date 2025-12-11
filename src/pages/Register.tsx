import { Link } from 'react-router';
import styled from 'styled-components';
import { useContext } from 'react';
import { Container } from "../components/Containers/Container";
import { Typography } from '../components/Typography/Typography';
import { LanguageContext } from '../providers/LanguageProvider';
import { CleanCard } from '../components/Cards/CleanCard';
import { LabeledDynamicInput } from '../components/Inputs/LabeledDynamicInput';
import { FilledButton } from '../components/Buttons/FilledButton';

const RegisterContainer = styled(Container)`
    background-color: #222;
`;
const RegisterCard = CleanCard;
const UsernameInput = LabeledDynamicInput;
const EmailInput = LabeledDynamicInput;
const PasswordInput = LabeledDynamicInput;
const RegisterButton = FilledButton;

export const Register = () => {
    const {lang, setLang} = useContext(LanguageContext)
    return (
        <RegisterContainer>
            <RegisterCard>
                <h2>Registration</h2>
                <UsernameInput name="username" type="text" label="Username"/>
                <EmailInput name="email" type="email" label="Email"/>
                <PasswordInput name="password" type="password" label="Pass"/>
                <RegisterButton>Register</RegisterButton>
                <Typography> or <Link to="/login">login</Link> an existing user</Typography>
            </RegisterCard>
        </RegisterContainer>
    );
};