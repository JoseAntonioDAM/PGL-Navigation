import { Tabs } from 'expo-router';
import PortfolioHeader from '../../components/PortfolioHeader';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <PortfolioHeader />,
      }}
    >
      <Tabs.Screen 
        name="portfolio/index" 
        options={{ 
          title: 'Inicio',
        }} 
      />
      <Tabs.Screen 
        name="portfolio/hobbies" 
        options={{ 
          title: 'Hobbies',
        }} 
      />
      <Tabs.Screen 
        name="portfolio/qr" 
        options={{ 
          title: 'QR',
        }} 
      />
    </Tabs>
  );
}