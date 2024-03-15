import React from "react";
import { Box, Flex, Heading, Text, Input, InputGroup, InputLeftElement, Icon, Avatar, Menu, MenuButton, MenuList, MenuItem, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Button, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaHome, FaFileInvoice, FaUsers, FaBoxes, FaEnvelope, FaCog, FaQuestionCircle, FaSignOutAlt, FaSearch, FaChevronUp, FaUserCircle, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Top Navigation */}
      <Flex bg="gray.100" p={4} alignItems="center" justifyContent="space-between">
        <Flex>
          <Menu>
            <MenuButton as={Button} variant="ghost" leftIcon={<Icon as={FaHome} />}>
              Home
            </MenuButton>
            <MenuList>
              <MenuItem icon={<FaFileInvoice />}>Invoices</MenuItem>
              <MenuItem icon={<FaUsers />}>Clients</MenuItem>
              <MenuItem icon={<FaBoxes />}>Products</MenuItem>
              <MenuItem icon={<FaEnvelope />}>Messages</MenuItem>
              <MenuItem icon={<FaCog />}>Settings</MenuItem>
              <MenuItem icon={<FaQuestionCircle />}>Help</MenuItem>
              <MenuItem icon={<FaSignOutAlt />}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems="center">
          <Avatar size="sm" name="User Avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQyMjczMnww&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>
      </Flex>

      {/* Header */}
      <Flex bg="white" p={8} alignItems="center" justifyContent="space-between" boxShadow="md">
        <Heading size="xl">Invo.</Heading>
        <InputGroup maxW="300px">
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Flex>

      {/* Summary Cards */}
      <Flex p={8} justifyContent="space-between">
        <Stat>
          <StatLabel>Total Revenue</StatLabel>
          <StatNumber>$216,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            12%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Invoices</StatLabel>
          <StatNumber>2,221</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            8%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Clients</StatLabel>
          <StatNumber>1,423</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Loyalty</StatLabel>
          <StatNumber>78%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            2%
          </StatHelpText>
        </Stat>
      </Flex>

      {/* Revenue Chart */}
      <Box p={8}>
        <Heading size="lg" mb={4}>
          Monthly Revenue
        </Heading>
        {/* Add line chart component here */}
      </Box>

      {/* Callout Panel */}
      <Flex direction="column" bg="blue.50" p={8} borderRadius="md" alignItems="center" textAlign="center" mx={8} my={12}>
        <Heading size="xl" mb={2}>
          We have added new invoicing templates!
        </Heading>
        <Text fontSize="lg" mb={6}>
          New templates focused on helping you grow your business
        </Text>
        <Button colorScheme="blue" size="lg">
          Download Now
        </Button>
      </Flex>

      {/* Activities */}
      <Box p={8}>
        <Heading size="lg" mb={4}>
          Activities
        </Heading>
        <Flex mb={4} alignItems="center">
          <Avatar size="sm" name="Francisco Giles" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQyMjczMnww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
          <Text>Francisco Giles created Invoice PO 44135</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaPaperPlane} mr={2} />
          <Text>Invoice: 15.34338 was sent to Chester Corp.</Text>
        </Flex>
      </Box>

      {/* Recent Invoices */}
      <Box p={8}>
        <Heading size="lg" mb={4}>
          Recent Invoices
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Invoice Number</Th>
                <Th>Date</Th>
                <Th>Client</Th>
                <Th isNumeric>Amount</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>PO 44HIC</Td>
                <Td>2023-05-12</Td>
                <Td>Acme Inc.</Td>
                <Td isNumeric>$4,500</Td>
                <Td>
                  <Text color="green.500">Paid</Text>
                </Td>
              </Tr>
              {/* Add more table rows */}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Index;
