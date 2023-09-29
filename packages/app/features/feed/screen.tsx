import {
  H5,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
  XStack,
  YStack,
  isWeb,
} from '@my/ui'

import { MyClimbsTab } from './myclimbs-tab'
import { ClimbsTab } from './climbs-tab'
import { useState } from 'react'
import { useUser } from '../../utils/useUser'

export function FeedScreen() {
  return (
    <YStack
      flex={1}
      {...(isWeb && {
        // Should fix in core
        position: 'unset' as any,
      })}
    >
      <TabsDemo />
    </YStack>
  )
}

export function TabsDemo() {
  return (
    // web only fix for position relative

    <YStack
      {...(isWeb && {
        position: 'unset' as any,
      })}
    >
      <HorizontalTabs />
    </YStack>
  )
}

const HorizontalTabs = () => {
  const user = useUser()
  console.log('user', user)
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      borderRadius="$4"
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Manage your account"
      >
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Open</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Scheduled</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">
        <ClimbsTab />
      </TabsContent>

      <TabsContent value="tab2">
        <H5>Connections</H5>
        <MyClimbsTab />
      </TabsContent>
    </Tabs>
  )
}

const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  )
}