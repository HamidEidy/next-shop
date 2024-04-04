'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Card from '../../Card';
const ReactTab = ({ tabPanel, tabList }: any) => {
    return (
        <> 
            <Tabs>
                <ul className="flex justify-center">
                    <TabList className={'flex'}>
                        {tabList.map((items: any, index: number) => (
                            <Tab className="px-5 lg:px-12 cursor-pointer dark:text-slate-100" key={index}>{items}</Tab>
                        ))}
                    </TabList>
                </ul>

                <div className='mt-8'>
                    {tabPanel.map((panel: any, index: number) => (
                        <TabPanel  key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {panel.slice(0, 4).map((product: any) => (
                                   <Card product={product}   key={product.id} />
                                ))}

                            </div>
                        </TabPanel>
                    ))}

                </div>

            </Tabs>
        </>
    )
}
export default ReactTab;