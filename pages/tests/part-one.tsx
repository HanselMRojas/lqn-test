import { useState, SyntheticEvent } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

import PartOneA from '../../components/partOneA'
import PartOneB from '../../components/partOneB'

const PartOne: NextPage = () => {
  const [value, setValue] = useState('one')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Head>
        <title>LQN Test Part One</title>
        <meta name="description" content="LQN Test Part One" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="web-inner">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <h1>LQN TEST PART 1</h1>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Parte A" value="one" />
                <Tab label="Parte B" value="two" />
              </TabList>
            </Box>
            <TabPanel value="one">
              <PartOneA />
            </TabPanel>
            <TabPanel value="two">
              <PartOneB />
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </>
  )
}

export default PartOne
