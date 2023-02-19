import { useState } from 'react';
import { createStyles, Navbar, Group, Text, AppShell, Header, Image, Input, Footer, Button } from '@mantine/core';
import { Outlet } from "react-router-dom";
import SearchIcon from './components/icons/Icons';
import Container from './components/container/Container'
import CarrouselPoster from './components/carrouselposter/CarrouselPoster'
import Connection from "./components/navbar/connection/Connection"
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
          <Group className={classes.navbar} position="apart">
            <div style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
              <Image radius="md"
                src="./../public/logo.png"
                alt="logo"
                fit="contain"
              />
            </div>
          </Group>
          <Group className={classes.navbar} position="apart" style={{ display: "flex", justifyContent: "center" }}>
            <Connection />
          </Group>
          <Group position="apart" style={{ display: "flex", justifyContent: "center" }}>
            <Button>ANIME</Button>
            <Button>MANGA</Button>
            <Button>COMMUNITY</Button>
            <Button>ABOUT</Button>
          </Group>
        </Navbar>
      }
      header={
        <Header className='header' height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
            <Text
              style={{ width: "60%" }}
              variant="gradient"
              gradient={{ from: '#FC8E45', to: '#3446FF', deg: 1 }}
              sx={{ fontFamily: 'Fredoka One' }}
              fz={35}
              fw={700}>
              MY ANIME LIST
            </Text>
            <Input
              className='searchBar'
              placeholder="Search"
              value={value}
              onChange={handleInputChange}
              variant="default"
              size="sm"
              icon={<SearchIcon />}
            />
          </div>
        </Header>
      }
    >
      <div className='main'>
        <CarrouselPoster />
        <Container />
      </div>
    </AppShell>
  );
}