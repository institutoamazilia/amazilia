import * as Layout from './Reaches.styles';
import { MainTitle, Data, map } from './data';

export default function Reaches() {
	return (
		<Layout.mainContainer>
			<Layout.mainTitle>{MainTitle.title}</Layout.mainTitle>
			<Layout.mainSubTitle>{MainTitle.subtitle}</Layout.mainSubTitle>
			<Layout.dataContainer>
				{Data.map(item => {
					return (
						<Layout.dataItemContainer>
							{item.title != '' ? (
								<Layout.dataTitle>
									{item.title}
								</Layout.dataTitle>
							) : null}
							<Layout.dataNumber>{item.number}</Layout.dataNumber>
							<Layout.dataInfo>{item.info}</Layout.dataInfo>
						</Layout.dataItemContainer>
					);
				})}
				<Layout.image src={map} />
			</Layout.dataContainer>
		</Layout.mainContainer>
	);
}
