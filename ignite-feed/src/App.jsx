import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'
import React from 'react'
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs'
import { AlertButton } from '@kiwicom/orbit-components/lib/Alert'

export function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Breadcrumbs>
            <BreadcrumbsItem
              href="/item"
              text="Home"
              aria-label="breadcrumb"
              separator=">"
            />
            <BreadcrumbsItem href="/item" text="Previous Page" />
            <BreadcrumbsItem href="/item" text="Current Page" />
          </Breadcrumbs>
          <Post author="Lis Amaral" content="lorem ipsum"></Post>
          <Post author="Victor Eduardo Oliveira" content="lorem ipsum"></Post>
        </main>
        <Breadcrumbs>
          <BreadcrumbsItem href="/item" text="Item 1" iconAfter={2} />
          <BreadcrumbsItem href="/item" text="Item 2" />
          <BreadcrumbsItem href="/item" text="Item 3" />
          <BreadcrumbsItem href="/item" text="Item 4" />
          <BreadcrumbsItem href="/item" text="Item 5" />
          <BreadcrumbsItem href="/item" text="Item 6" />
          <BreadcrumbsItem href="/item" text="Item 7" />
          <BreadcrumbsItem href="/item" text="Item 8" />
          <AlertButton>Current Page</AlertButton>
        </Breadcrumbs>
      </div>
    </div>
  )
}
export default App
