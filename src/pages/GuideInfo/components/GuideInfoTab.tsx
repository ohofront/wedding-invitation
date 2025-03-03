import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { guideInfo } from '@/constants/guideInfo';

const GuideInfoTab = () => {
  return (
    <Tabs defaultValue="meal" className="w-full">
      {/* 탭 버튼 리스트 */}
      <TabsList className="grid grid-cols-2 p-0 rounded-none">
        {guideInfo.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="border  rounded-t-lg px-3 py-3 bg-gray-100  text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:border-gray-200 data-[state=active]:border-b-0 text-base font-semibold"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* 탭 컨텐츠 */}
      {guideInfo.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-0">
          <Card className="border border-gray-200 rounded-bl-lg rounded-br-lg shadow-sm">
            <CardContent className="px-4 py-10 text-center text-black leading-7">
              {tab.content.split('\n').map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};
export default GuideInfoTab;
