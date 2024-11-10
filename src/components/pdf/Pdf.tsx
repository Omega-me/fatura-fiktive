import { Page, View, Document, Text } from '@react-pdf/renderer';
import React from 'react';
import { createTw } from 'react-pdf-tailwind';

const tw = createTw({});

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={tw('p-6 bg-white')}>
        {/* Header */}
        <View style={tw('flex flex-row items-center mb-8')}>
          {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" style={tw('h-24 w-24')} /> */}
          <View style={tw('ml-auto text-right')}>
            <Text style={tw('text-[20px] font-bold')}>Fatura Fiktive</Text>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Numri i fatures: </Text>
              <Text style={tw('text-gray-500 text-sm')}>234</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Data e leshimit: </Text>
              <Text style={tw('text-gray-500 text-sm')}>2024-21-02</Text>
            </View>
          </View>
        </View>

        {/* Client Info */}
        <View style={tw('flex flex-row items-start mt-8')}>
          <View>
            <Text style={tw('text-gray-700 text-[14px]')}>Bleresi:</Text>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Emri: </Text>
              <Text style={tw('text-gray-500 text-sm')}>Olken Merxira</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Email: </Text>
              <Text style={tw('text-gray-500 text-sm')}>info@laravel.com</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Telefon: </Text>
              <Text style={tw('text-gray-500 text-sm')}>+355 696621186</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Adresa: </Text>
              <Text style={tw('text-gray-500 text-sm')}>102, San-Francisco, CA, USA</Text>
            </View>
          </View>
          <View style={tw('ml-auto text-right')}>
            <Text style={tw('text-gray-700 text-[14px]')}>Shitesi:</Text>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Emri: </Text>
              <Text style={tw('text-gray-500 text-sm')}>Alumil</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>NIPT: </Text>
              <Text style={tw('text-gray-500 text-sm')}>2HIHIW776H</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Email: </Text>
              <Text style={tw('text-gray-500 text-sm')}>info@laravel.com</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Telefon 1: </Text>
              <Text style={tw('text-gray-500 text-sm')}>+355 696621186</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Telefon 2: </Text>
              <Text style={tw('text-gray-500 text-sm')}>+355 696621187</Text>
            </View>
            <View style={tw('flex flex-row items-start justify-start ')}>
              <Text style={tw('text-gray-600 text-sm mr-2')}>Adresa: </Text>
              <Text style={tw('text-gray-500 text-sm')}>102, San-Francisco, CA, USA</Text>
            </View>
          </View>
        </View>

        <View style={tw('mt-8')}>
          <View style={tw('flex flex-row bg-gray-200 p-2 mb-2')}>
            <Text style={tw('w-1/6 font-semibold text-gray-800 text-sm')}>Nr</Text>
            <Text style={tw('w-1/2 text-right font-semibold text-gray-800 text-sm border-r-[1px] px-2')}>Emertimi</Text>
            <Text style={tw('w-1/6 text-right font-semibold text-gray-800 text-sm border-r-[1px] px-2')}>Sasia</Text>
            <Text style={tw('w-1/3 text-right font-semibold text-gray-800 text-sm border-r-[1px] px-2')}>Gjeresia (Cm)</Text>
            <Text style={tw('w-1/3 text-right font-semibold text-gray-800 text-sm border-r-[1px] px-2')}>Lartesia (Cm)</Text>
            <Text style={tw('w-1/3 text-right font-semibold text-gray-800 text-sm border-r-[1px] px-2')}>Cmimi (Leke)</Text>
            <Text style={tw('w-1/3 text-right font-semibold text-gray-800 text-sm px-2')}>Totali (Leke)</Text>
          </View>

          {[
            { nr: 1, emertimi: 'Shishe uji 500ml', sasia: 10, gjeresia: 6, lartesia: 15, cmimi: 157000.998, totali: 357000 },
            { nr: 1, emertimi: 'Shishe uji 500ml', sasia: 10, gjeresia: 6, lartesia: 15, cmimi: 157000.998, totali: 357000 },
            { nr: 1, emertimi: 'Shishe uji 500ml', sasia: 10, gjeresia: 6, lartesia: 15, cmimi: 157000.998, totali: 357000 },
            { nr: 2, emertimi: 'Biskota çokolate', sasia: 5, gjeresia: 10, lartesia: 20, cmimi: 143500, totali: 357000 },
            { nr: 3, emertimi: 'Quell 1L', sasia: 8, gjeresia: 8, lartesia: 25, cmimi: 1.8, totali: 14.4 },
          ].map((item) => (
            <View style={tw('border-[1px] border-gray-300 border-dashed mb-2')} key={item.nr}>
              <View style={tw('flex flex-row p-2 bg-gray-100')}>
                <Text style={tw('w-1/6 text-gray-500 text-sm mx-1')}>{item.nr}</Text>
                <Text style={tw('w-1/2 text-right text-gray-500 text-sm border-gray-500 px-2')}>{item.emertimi}</Text>
                <Text style={tw('w-1/6 text-right text-gray-500 text-sm border-gray-500 px-2')}>{item.sasia}</Text>
                <Text style={tw('w-1/3 text-right text-gray-500 text-sm border-gray-500 px-2')}>{item.gjeresia}</Text>
                <Text style={tw('w-1/3 text-right text-gray-500 text-sm border-gray-500 px-2')}>{item.lartesia}</Text>
                <Text style={tw('w-1/3 text-right text-gray-500 text-sm border-gray-500 px-2')}>{item.cmimi}</Text>
                <Text style={tw('w-1/3 text-right text-gray-500 text-sm pr-2')}>{item.totali}</Text>
              </View>
              <View style={tw('w-full p-2')}>
                <Text style={tw('text-gray-500 text-sm')}>Image here</Text>
                <Text style={tw('w-1/2 text-gray-500 text-sm mr-2')}>Other infos</Text>
              </View>
            </View>
          ))}
          <View style={tw('flex flex-row bg-gray-200 p-2 mb-2')}>
            <Text style={tw('w-full font-semibold text-gray-800 text-sm')}></Text>
            <Text style={tw('w-1/3 text-right font-semibold text-gray-800 text-sm px-2')}>Totali: 234303.422</Text>
          </View>

          <View style={tw('w-[30%] ml-auto')}>
            <View style={tw('flex flex-row bg-gray-100 mb-[0.5px] p-2 border-b-[1px] border-gray-300 border-dashed')}>
              <Text style={tw('w-full font-semibold text-gray-800 text-sm')}>Vlera</Text>
              <Text style={tw('w-full text-right font-semibold text-gray-800 text-sm px-2')}>234000.34</Text>
            </View>
            <View style={tw('flex flex-row bg-gray-100 mb-[0.5px] p-2 border-b-[1px] border-gray-300 border-dashed')}>
              <Text style={tw('w-full font-semibold text-gray-800 text-sm')}>Zbritje</Text>
              <Text style={tw('w-full text-right font-semibold text-gray-800 text-sm px-2')}>50%</Text>
            </View>
            <View style={tw('flex flex-row bg-gray-100 mb-[0.5px] p-2 border-b-[1px] border-gray-300 border-dashed')}>
              <Text style={tw('w-full font-semibold text-gray-800 text-sm')}>Vlera - zbritje</Text>
              <Text style={tw('w-full text-right font-semibold text-gray-800 text-sm px-2')}>157000.17</Text>
            </View>
            <View style={tw('flex flex-row bg-gray-100 mb-[0.5px] p-2 border-b-[1px] border-gray-500 border-dashed')}>
              <Text style={tw('w-full font-semibold text-gray-800 text-sm')}>TVSH</Text>
              <Text style={tw('w-full text-right font-semibold text-gray-800 text-sm px-2')}>3435</Text>
            </View>
            <View style={tw('flex flex-row bg-gray-200 p-2')}>
              <Text style={tw('w-full font-semibold text-gray-800 text-sm')}>Totali</Text>
              <Text style={tw('w-full text-right font-semibold text-gray-800 text-sm px-2')}>196000.34</Text>
            </View>
          </View>
        </View>

        <View style={tw('mt-10 w-full h-[50px] flex flex-row item-center justify-around')}>
          <View>
            <Text style={tw('text-sm font-bold')}>Faturoi: _____________</Text>
          </View>
          <View>
            <Text style={tw('text-sm font-bold')}>Pranoi: _____________</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
