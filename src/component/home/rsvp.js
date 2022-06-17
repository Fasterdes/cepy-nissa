import tw from "twin.macro";
import { useForm } from "react-hook-form";
import { Button } from "../common/button";
import { AddKehadiran } from '../../api/index'

import { ContainerWeddingSpace } from "../common/container";
import { HeadingTwo } from "../common/typography";


const RsvpWrapperArea = tw.form`text-center space-y-4`
const InputRsvpWrapper = tw.div`grid gap-y-4`
const LabelTextRsvp = tw.label`text-left font-lora text-base font-medium text-blue capitalize`
const InputTextRsvp = tw.input`p-3 text-sm border border-blue rounded-md`
const TextAreaRsvp = tw.textarea`p-3 text-sm border border-blue rounded-md`
const InputSelectRsvp = tw.select`p-3 text-sm border border-blue rounded-md mb-11`
const OptionSelectRsvp = tw.option``
const TextWarning = tw.p`text-sm text-red-600 text-left font-bold`

const RSVP = () => {
    const { register , handleSubmit , reset , formState : { errors }} = useForm()

    const SubmitForm = async (data) => { 
        try { 
            await AddKehadiran(data)
            console.log(data)
            console.log('data have been saved')
            alert('data saved')
            reset()
        }catch(err) { 
            console.log(err)
        }
    }

    return ( 
        <ContainerWeddingSpace> 
            <HeadingTwo>konfirmasi kehadiran</HeadingTwo>
            <RsvpWrapperArea onSubmit={handleSubmit(SubmitForm)}> 
                <InputRsvpWrapper>
                    <LabelTextRsvp>nama anda</LabelTextRsvp>
                    <InputTextRsvp type='text' name="name" placeholder='Masukkan nama anda' {...register('nama' , { required : true })}/>
                    {errors?.nama && <TextWarning>Silahkan input terlebih dahulu</TextWarning>}
                </InputRsvpWrapper>
                <InputRsvpWrapper>
                    <LabelTextRsvp>pesan</LabelTextRsvp>
                    <TextAreaRsvp type='text' placeholder='Berikan pesan kepada mempelai' {...register('pesan'  , { required : true } )}/>
                    {errors?.pesan && <TextWarning>Jangan lupa memberi pesan ya kepada mempelai</TextWarning>}
                </InputRsvpWrapper>
                <InputRsvpWrapper> 
                    <LabelTextRsvp>konfirmasi kehadiran</LabelTextRsvp>
                    <InputSelectRsvp {...register('kehadiran'  , { required : true } )}>
                        <OptionSelectRsvp defaultValue='pilih kehadiran'>Pilih Kehadiran</OptionSelectRsvp>
                        <OptionSelectRsvp value='Ya, Saya akan hadir'>Ya, Saya akan hadir</OptionSelectRsvp>
                        <OptionSelectRsvp value='Maaf, Saya tidak bisa hadir'>Maaf, Saya tidak bisa hadir</OptionSelectRsvp>
                    </InputSelectRsvp>
                </InputRsvpWrapper> { errors?.kehadiran && <TextWarning>Jangan lupa konfirmasi kehadiran</TextWarning>}

                <Button isSecondary type="submit">KONFIRMASI KEHADIRAN</Button>
            </RsvpWrapperArea>
        </ContainerWeddingSpace>
    )
}

export  { RSVP }