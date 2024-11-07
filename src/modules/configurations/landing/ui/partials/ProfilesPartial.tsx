import React, { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { IConfigurationsLandingVm } from '../../useConfigurationsLandingVm';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends IConfigurationsLandingVm {}

const ProfilesPartial: FC<Props> = () => {
  return (
    <Tabs defaultValue="profilet" className="w-full">
      <TabsList className="w-full md:w-[55%] lg:w-[40%] flex justify-evenly">
        <TabsTrigger className="w-full" value="profilet">
          Profilet
        </TabsTrigger>
        <TabsTrigger className="w-full" value="ngjyrat">
          Ngjyrat
        </TabsTrigger>
        <TabsTrigger className="w-full" value="koeficientet">
          Koeficientet e izolimit
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profilet">
        <Card>
          <CardHeader>
            <CardTitle>Llojet e profileve</CardTitle>
            <CardDescription>Shiko dhe konfiguro listen e profileve</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
            consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
          </CardContent>
          <CardFooter>
            <Button>Shto nje profil</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="ngjyrat">
        <Card>
          <CardHeader>
            <CardTitle>Llojet e Ngjyrave</CardTitle>
            <CardDescription>Shiko dhe konfiguro listen e ngjyrave</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat porro, veniam ea dolorum suscipit eum culpa nobis pariatur minus,
            consectetur magni impedit excepturi adipisci est asperiores dicta libero alias. Aspernatur.
          </CardContent>
          <CardFooter>
            <Button>Shto nje ngjyre</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="koeficientet">
        <Card>
          <CardHeader>
            <CardTitle>Koeficientet e izolimit te profileve</CardTitle>
            <CardDescription>Shiko dhe konfiguro listen e koeficienteve te izolimit te profileve</CardDescription>
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
  );
};

export default ProfilesPartial;
