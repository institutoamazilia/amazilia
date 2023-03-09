import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/logo.png';
import { v4 as uuidv4 } from 'uuid';
import { Links } from './data';
import * as Layout from './NavBar.styles';

function NavBar(props: any) {
	const [anchorElNav, setAnchorElNav] =
		React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] =
		React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			id='appbar'
			className='animate__animated animate__slideInDown'
			style={{
				backgroundColor: props.color,
			}}
		>
			<Container maxWidth='xl' style={{ paddingLeft: '10%' }}>
				<Toolbar disableGutters>
					<Button href='/'>
						<img src={Logo} alt='logo' />
					</Button>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', lg: 'none' },
							justifyContent: 'flex-end',
						}}
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', lg: 'none' },
							}}
						>
							{Links.map(page => (
								<MenuItem
									key={uuidv4()}
									onClick={handleCloseNavMenu}
								>
									<Button
										key={page.text}
										onClick={handleCloseNavMenu}
										href={page.link}
									>
										{page.text}
									</Button>
								</MenuItem>
							))}
							<Layout.donateButtonMenu
								variant='contained'
								color='secondary'
							>
								DOE AGORA
							</Layout.donateButtonMenu>
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', lg: 'flex' },
						}}
					>
						{Links.map(page => (
							<Button
								key={page.text}
								onClick={handleCloseNavMenu}
								sx={{
									my: 2,
									color: 'white',
									display: 'block',
									paddingLeft: '2rem',
								}}
								href={page.link}
							>
								{page.text}
							</Button>
						))}
						<Layout.donateButton
							variant='contained'
							color='secondary'
						>
							DOE AGORA
						</Layout.donateButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
