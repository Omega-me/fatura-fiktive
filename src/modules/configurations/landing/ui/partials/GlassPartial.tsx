import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IConfigurationsLandingVm } from '../../useConfigurationsLandingVm';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends IConfigurationsLandingVm {}

const GlassPartial: FC<Props> = () => {
  return (
    <div>
      <Tabs defaultValue="xhamat" className="w-full">
        <TabsList className="w-full md:w-[55%] lg:w-[40%] flex justify-evenly">
          <TabsTrigger className="w-full" value="xhamat">
            Xhamat
          </TabsTrigger>
          <TabsTrigger className="w-full" value="koeficientet">
            Koeficientet i izolimit te xhamit
          </TabsTrigger>
        </TabsList>
        <TabsContent value="xhamat">
          <Card>
            <CardHeader>
              <CardTitle>Llojet e xhamave</CardTitle>
              <CardDescription>Shiko dhe konfiguro listen e xhamave</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
              consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
            </CardContent>
            <CardFooter>
              <Button>Shto nje xham</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="koeficientet">
          <Card>
            <CardHeader>
              <CardTitle>Koeficientet e izolimit te profileve</CardTitle>
              <CardDescription>Shiko dhe konfiguro listen e koeficienteve te izolimit te xhamit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
              consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
            </CardContent>
            <CardFooter>
              <Button>Shto nje koeficient</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GlassPartial;
