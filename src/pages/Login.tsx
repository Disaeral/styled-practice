import styled from 'styled-components';
import { Link } from 'react-router';
import { ChangeEvent, useContext, useState } from 'react';

import { LanguageContext } from '../providers/LanguageProvider';
import { Typography } from '../components/Typography/Typography';
import { LabeledDynamicInput } from '../components/Inputs/LabeledDynamicInput';
import { CleanCard } from '../components/Cards/CleanCard';
import { FilledButton } from '../components/Buttons/FilledButton';
import { Container } from '../components/Containers/Container';
import { useTranslation } from 'react-i18next';

type LoginForm = {
    username: string,
    password: string
}

const LoginContainer = styled(Container)`
    background-color: #333;
`
const LoginCard = CleanCard;
const UsernameInput = LabeledDynamicInput;
const PasswordInput = LabeledDynamicInput;
const LoginButton = FilledButton

export const Login = () => {
    const { lang } = useContext(LanguageContext);
    const {t, i18n} = useTranslation();
    const [loginForm, setLoginForm] = useState<LoginForm>({username: "", password: ""});
    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    return (
        <LoginContainer>
            <LoginCard>
                <h2>{t("Hello World")}</h2>
                <UsernameInput 
                    type="text"
                    name="username"
                    label="Username"
                    value={loginForm.username}
                    onChange={handleInput}
                />
                <PasswordInput
                    type="password"
                    name="password"
                    label="Password"
                    value={loginForm.password}
                    onChange={handleInput}
                />
                <LoginButton>Login</LoginButton>
                <Typography> or new user <Link to="/register">registration</Link></Typography>
            </LoginCard>
        </LoginContainer>
    );
};