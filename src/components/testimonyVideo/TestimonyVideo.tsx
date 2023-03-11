import * as Layout from './TestimonyVideo.styles';
import { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { title, Videos, checkMoreButton } from './data';
import { Button } from '@mui/material';

export default function TestimonyVideo() {
	const [modal, setModal] = useState(false);
	const [videoLoading, setVideoLoading] = useState(true);

	const openModal = () => {
		setModal(!modal);
	};

	const spinner = () => {
		setVideoLoading(!videoLoading);
	};
	return (
		<Layout.mainSection>
			<Layout.mainTitle>{title}</Layout.mainTitle>
			<Layout.containerVideo>
				{Videos.map(item => {
					return (
						<Layout.boxVideo>
							<Button onClick={openModal}>
								<img src={item.image} />
								{modal ? (
									<Layout.bgVideo>
										<Layout.videoAlign>
											<Layout.videoContent modal={modal}>
												<Layout.videoClose
													arial-label='Close modal'
													onClick={setModal}
												/>
												<Layout.modalVideoAlign>
													{videoLoading ? (
														<Layout.videoSpinner>
															<BiLoaderAlt fadeIn='none' />
														</Layout.videoSpinner>
													) : null}
													<Layout.videoStyle
														onLoad={spinner}
														loading='lazy'
														width='800'
														height='500'
														src={item.link}
														title='YouTube video player'
														frameBorder='0'
														allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
														allowfullscreen
													></Layout.videoStyle>
												</Layout.modalVideoAlign>
											</Layout.videoContent>
										</Layout.videoAlign>
									</Layout.bgVideo>
								) : null}
							</Button>
							<Layout.name>{item.name}</Layout.name>
							<Layout.text>{item.text}</Layout.text>
						</Layout.boxVideo>
					);
				})}
			</Layout.containerVideo>
			<Layout.checkMoreButton variant='outlined' size='large'>
				{checkMoreButton}
			</Layout.checkMoreButton>
		</Layout.mainSection>
	);
}
