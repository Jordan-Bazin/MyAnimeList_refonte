import { useState } from 'react';
import { createStyles, Navbar, Group, Text, AppShell, Header, Image, Input, Footer, Button, ScrollArea } from '@mantine/core';
import { Outlet, Link } from "react-router-dom";
import SearchIcon from './components/icons/SearchIcons';
import Container from './components/container/Container'
import CarrouselPoster from './components/container/carrouselposter/CarrouselPoster'
import './App.css'



const useStyles = createStyles((theme, _params, getRef) => {
  return {
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
    },

    navbar: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },
  };
});

function handleInputChange(event) {
  setValue(event.target.value);
}

export default function App() {
  const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);

  const [value, setValue] = useState('');

  return (
    <AppShell
      className='app'
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar className='navbar' p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ base: 100, sm: 200, lg: 300 }}>
          <Link to="/">
            <Group className={classes.navbar} position="apart">
              <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
                <Image radius="md"
                  src="./../public/logo.png"
                  alt="logo"
                  fit="contain"
                />
              </div>
            </Group>
          </Link>
          <Group className={classes.navbar} position="apart" style={{ display: "flex", justifyContent: "center" }}>
          <Link className='link' to="/login">
              <Button>LOGIN</Button>
            </Link>
          </Group>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          <Group position="apart">
            <Link className='link' to="/anime">
              <Button>ANIME</Button>
            </Link>
            <Link className='link' to="/manga">
              <Button>MANGA</Button>
            </Link>
            <Link className='link' to="/community">
              <Button>COMMUNITY</Button>
            </Link>
            <Link className='link' to="/about">
              <Button>ABOUT</Button>
            </Link>
          </Group>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header className='header' height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%'}}>
            <Link className='title' to="/">
              <Text
                variant="gradient"
                gradient={{ from: '#FC8E45', to: '#3446FF', deg: 1 }}
                sx={{ fontFamily: 'Fredoka One' }}
                fz={35}
                fw={700}>
                MY ANIME LIST
              </Text>
            </Link>
            <Input
              className='searchBar'
              placeholder="Search"
              //value={value}
              //onChange={handleInputChange}
              //variant="default"
              //size="sm"
              icon={<SearchIcon />}
              />
            
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}