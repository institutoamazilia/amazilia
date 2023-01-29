import image from '../../assets/hearder-background.png'

interface header {
    title: string,
    subtitle: string,
    img: string,
}

export const dataHeader: header = {
    title: `Fortalecemos a gestão de OSCs em todo Brasil`,
    subtitle: "Desde 2020 apoiamos Organizações da Sociedade Civil (OSCs), também conhecidas como ONGs, por meio de capacitações gratuitas em gestão no Terceiro Setor.",
    img: image,
}