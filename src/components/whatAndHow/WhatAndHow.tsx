import * as Layout from './WhatAndHow.styles';
import { CardContent } from '@mui/material';
import { mainTitle, Cards, modal, PdfButton } from './data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function WhatAndHow() {
	const [show, setShow] = useState(false);

	const PopUp = ({ children, show, setShow }) => {
		const content = show && (
			<Layout.overlay>
				<div>{children}</div>
			</Layout.overlay>
		);

		return content;
	};

	return (
		<Layout.mainContainer>
			<Layout.sectionTitle>{mainTitle}</Layout.sectionTitle>

			<Layout.cardContainer>
				{Cards.map(item => (
					<Layout.card>
						<CardContent>
							<img src={item.icon} alt={`icone ${item.text}`} />
							{item.info ? (
								<Layout.cardTitleClickable
									onClick={() => setShow(true)}
								>
									{item.text}
									{item.info}
								</Layout.cardTitleClickable>
							) : (
								<Layout.cardTitle>{item.text}</Layout.cardTitle>
							)}
						</CardContent>
					</Layout.card>
				))}
			</Layout.cardContainer>
			<PopUp show={show} setShow={setShow}>
				<Layout.popup>
					<Layout.popupText>{modal.text1}</Layout.popupText>
					<Layout.popupText>{modal.text2}</Layout.popupText>
					<Layout.popupClose
						src={modal.close}
						onClick={() => setShow(false)}
					/>
				</Layout.popup>
			</PopUp>
			<Link to={PdfButton.link}>
				<Layout.pdfButton
					variant='outlined'
					startIcon={<PictureAsPdfIcon />}
				>
					{PdfButton.name}
				</Layout.pdfButton>
			</Link>
		</Layout.mainContainer>
	);
}
