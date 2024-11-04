import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { IConfigurationsLandingVm } from '../../useConfigurationsLandingVm';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends IConfigurationsLandingVm {}

const MechanismsPartial: FC<Props> = () => {
  return (
    <div>
      <Tabs defaultValue="Roletat" className="w-full">
        <TabsList className="w-full md:w-[55%] lg:w-[40%] flex justify-evenly">
          <TabsTrigger className="w-full" value="Roletat">
            Roletat
          </TabsTrigger>
          <TabsTrigger className="w-full" value="rrjeta">
            Rrjeta per insekte
          </TabsTrigger>
          <TabsTrigger className="w-full" value="Motoret">
            Motoret
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Roletat">
          <Card>
            <CardHeader>
              <CardTitle>Llojet e roletave</CardTitle>
              <CardDescription>Shiko dhe konfiguro listen e roletave</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
              consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
            </CardContent>
            <CardFooter>
              <Button>Shto nje Rolete</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="rrjeta">
          <Card>
            <CardHeader>
              <CardTitle>Rrjeta per insekte</CardTitle>
              <CardDescription>Shiko dhe konfiguro listen e rrjetave per insekte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
              consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
            </CardContent>
            <CardFooter>
              <Button>Shto nje rrjete</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Motoret">
          <Card>
            <CardHeader>
              <CardTitle>Llojet e motoret</CardTitle>
              <CardDescription>Shiko dhe konfiguro listen e motoreve</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
              consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
            </CardContent>
            <CardFooter>
              <Button>Shto nje motor</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MechanismsPartial;
