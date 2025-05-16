import type { ChakraProps, ThemingProps } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import _omit from 'lodash/omit';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

import type { RoutedTab } from './types';

import TabsWithScroll from './TabsWithScroll';
import useTabIndexFromQuery from './useTabIndexFromQuery';

interface Props extends ThemingProps<'Tabs'> {
  tabs: Array<RoutedTab>;
  tabListProps?:
    | ChakraProps
    | (({
      isSticky,
      activeTabIndex,
    }: {
      isSticky: boolean;
      activeTabIndex: number;
    }) => ChakraProps);
  rightSlot?: React.ReactNode;
  stickyEnabled?: boolean;
  className?: string;
}

const RoutedTabs = ({
  tabs,
  tabListProps,
  rightSlot,
  stickyEnabled,
  className,
  ...themeProps
}: Props) => {
  const router = useRouter();
  const tabIndex = useTabIndexFromQuery(tabs);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabChange = React.useCallback(
    (index: number) => {
      const nextTab = tabs[index];
      // Get the current query parameters except for 'tab'
      const queryWithoutTab = _omit(router.query, 'tab');

      router.push(
        {
          pathname: router.pathname,
          query: { ...queryWithoutTab, tab: nextTab.id },
        },
        undefined,
        { shallow: true },
      );
    },
    [ tabs, router ],
  );

  useEffect(() => {
    if (router.query.scroll_to_tabs) {
      tabsRef?.current?.scrollIntoView(true);
      delete router.query.scroll_to_tabs;
      router.push(
        {
          pathname: router.pathname,
          query: router.query,
        },
        undefined,
        { shallow: true },
      );
    }
    // replicate componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabsWithScroll
      tabs={ tabs }
      tabListProps={ tabListProps }
      rightSlot={ rightSlot }
      stickyEnabled={ stickyEnabled }
      onTabChange={ handleTabChange }
      defaultTabIndex={ tabIndex }
      { ...themeProps }
    />
  );
};

export default React.memo(chakra(RoutedTabs));
