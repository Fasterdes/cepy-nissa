import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { Button } from "../common/button";
import { AddUcapan } from "../../api";

import { ContainerWeddingSpace } from "../common/container";
import { HeadingTwo } from "../common/typography";

const UcapanWrapperArea = tw.div`bg-brown-light py-11 rounded-xl px-4
`
const UcapanFormWrapperArea = tw.form`text-center space-y-4`
const InputUcapanWrapper = tw.div`grid gap-y-4`
const LabelTextUcapan = tw.label`text-left font-lora text-base font-medium text-blue capitalize`
const InputTextUcapan = tw.input`p-3 text-blue text-sm border border-blue rounded-md`
const TextAreaUcapan = tw.textarea`p-3 text-blue text-sm border border-blue rounded-md`
const TextWarning = tw.p`text-sm text-red-600 text-left font-bold`

const Ucapan = () => { 
    const { register , handleSubmit , reset , formState : { errors }} = useForm()

    const SubmitForm = async data => { 
       try {
        await AddUcapan(data)
        console.log(data)
        console.log('Data have been saved')
        alert('data saved')
        reset()
       } catch (error) {
        console.log(error)
       }
    }

    return (
        <ContainerWeddingSpace>
            <HeadingTwo isWhite>ucapkan sesuatu untuk kami berdua</HeadingTwo>

            <UcapanWrapperArea>
                <UcapanFormWrapperArea onSubmit={handleSubmit(SubmitForm)}>
                    <InputUcapanWrapper>
                        <LabelTextUcapan>nama anda</LabelTextUcapan>
                        <InputTextUcapan type='text' placeholder='Masukkan nama anda' {...register('nama'  , { required : true })}/>
                    </InputUcapanWrapper>
                    {errors?.nama && <TextWarning>Silahkan input terlebih dahulu </TextWarning>}
                    <InputUcapanWrapper>
                        <LabelTextUcapan>ucapan</LabelTextUcapan>
                        <TextAreaUcapan type='text' placeholder='Berikan ucapan atau doa kepada mempelai'  {...register('ucapan'  , { required : true })}/>
                    </InputUcapanWrapper>
                    {errors?.ucapan && <TextWarning>Masukan pesanmu dan doa kepada kita ya</TextWarning>}
                    <Button isSecondary>KIRIM UCAPAN</Button>
                </UcapanFormWrapperArea>
            </UcapanWrapperArea>
        </ContainerWeddingSpace>
    )
}

export { Ucapan }