import * as Layout from './ourCause.styles';
import { questionTitle, sectionTitle, Cards, popUp } from './data';
import { useState } from 'react';

export default function ourCause() {
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
			<Layout.questionTitle>{questionTitle}</Layout.questionTitle>
			<Layout.sectionTitle>{sectionTitle}</Layout.sectionTitle>
			<Layout.sectionCardsContainer>
				{Cards.map(item => {
					return (
						<Layout.containerCard>
							<img src={item.image} />
							<Layout.titleCard>{item.title}</Layout.titleCard>
							<Layout.textCard>{item.text}</Layout.textCard>
							{item.font != '' ? (
								item.link != '' ? (
									<Layout.fontCard
										href={item.link}
										target='_blank'
									>
										{item.font}
									</Layout.fontCard>
								) : (
									<Layout.fontCard
										onClick={() => setShow(true)}
									>
										{item.font}
									</Layout.fontCard>
								)
							) : null}
						</Layout.containerCard>
					);
				})}
			</Layout.sectionCardsContainer>
			<PopUp show={show} setShow={setShow}>
				<Layout.popup>
					<Layout.popupText>{popUp.text}</Layout.popupText>
					<Layout.popupClose
						src={popUp.close}
						onClick={() => setShow(false)}
					/>
				</Layout.popup>
			</PopUp>
		</Layout.mainContainer>
	);
}
