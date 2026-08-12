import { DefaultTemplate } from "../../../Template/DefaultTemplate";
import { ScrollToTop } from "@components/UI/ScrollToTop";
import { useEffect } from "react";

import { useForgotPasswordStore } from "../../../stores/forgotPasswordStore";

//TELAS PARA RECUPERAR A SENHA
import EmailStep from "./EmailStep";
import CodeStep from "./CodeStep";
import NewPasswordStep from "./NewPasswordStep";

const ForgotPassword = () => {
    const { step, reset } = useForgotPasswordStore()

    useEffect(() => {
        reset();
    }, [reset]);



    const screens = [
        <EmailStep key={0} />,
        <CodeStep key={1} />,
        <NewPasswordStep key={2} />
    ];

    
     
    /*
    const handleSubmit = async () => {
        if(!email ){
            setError("Preencha o email")
            return
        }
        
        ForgotPasswordMutation.mutateAsync(
         email
            ,{
            onSuccess: (data) => {
                console.log(data)
                if(!data.success){
                    setError("Email ou senha incorreto")
                }else{
                    navigate(`/auth/code?token=${encodeURIComponent(data.recoverToken)}`)
                }
            },
            onError: (error) => {
                console.log(error)
            }
        })
        
    }
    */
    return (
        <DefaultTemplate>
            <ScrollToTop/>
            {screens[step]}
        </DefaultTemplate>

    )

}

export default ForgotPassword
