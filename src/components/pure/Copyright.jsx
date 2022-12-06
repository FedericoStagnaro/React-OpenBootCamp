import React from 'react'

import { Typography , Link } from '@mui/material'

export default function Copyright() {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                {'Copyright C '}

                <Link color='inherit' href='https://www.imaginaformacion.com'>{'Imagina Formacion'}</Link>
                { ' ' }
                { new Date().getFullYear()}

            </Typography>
        </div>
    )
}
