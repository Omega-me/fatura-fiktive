'use client';
import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { Spinner } from '../ui/spinner';

const tw = createTw({});

const Pdf = ({ isPdfMode }: { isPdfMode?: boolean }) => {
  const [client, setClicent] = useState(false);
  useEffect(() => {
    setClicent(!client);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!client) return <Spinner />;

  return (
    <>
      {isPdfMode ? (
        <PDFViewer showToolbar={true} className="w-full h-[80vh]">
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
        </PDFViewer>
      ) : (
        <div className="w-[700px] p-6 bg-white">
          {/* Header */}
          <div className="flex flex-row items-center mb-8">
            {/* Logo */}
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" className="h-24 w-24" alt="Logo" /> */}
            <div className="ml-auto text-right">
              <h1 className="text-2xl font-semibold text-gray-600">Fatura Fiktive</h1>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Numri i fatures:</span>
                <span className="text-gray-500 text-[12px]">234</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Data e leshimit:</span>
                <span className="text-gray-500 text-[12px]">2024-21-02</span>
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="flex flex-row items-start mt-8">
            <div>
              <h2 className="text-gray-700 text-md">Bleresi:</h2>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Emri:</span>
                <span className="text-gray-500 text-[12px]">Olken Merxira</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Email:</span>
                <span className="text-gray-500 text-[12px]">info@laravel.com</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Telefon:</span>
                <span className="text-gray-500 text-[12px]">+355 696621186</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Adresa:</span>
                <span className="text-gray-500 text-[12px]">102, San-Francisco, CA, USA</span>
              </div>
            </div>
            <div className="ml-auto text-left">
              <h2 className="text-gray-700 text-md">Shitesi:</h2>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Emri:</span>
                <span className="text-gray-500 text-[12px]">Alumil</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">NIPT:</span>
                <span className="text-gray-500 text-[12px]">2HIHIW776H</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Email:</span>
                <span className="text-gray-500 text-[12px]">info@laravel.com</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Telefon 1:</span>
                <span className="text-gray-500 text-[12px]">+355 696621186</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Telefon 2:</span>
                <span className="text-gray-500 text-[12px]">+355 696621187</span>
              </div>
              <div className="flex flex-row items-start justify-start">
                <span className="text-gray-600 text-[12px] mr-2">Adresa:</span>
                <span className="text-gray-500 text-[12px]">102, San-Francisco, CA, USA</span>
              </div>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="mt-8">
            <div className="flex flex-row bg-gray-200 p-1 mb-2">
              <div className="w-1/6 font-semibold text-gray-600 text-[12px]">Nr</div>
              <div className="w-1/2 text-right font-semibold text-gray-600 text-[12px] border border-r-gray-600 px-2 whitespace-nowrap">Emertimi</div>
              <div className="w-1/6 text-right font-semibold text-gray-600 text-[12px] border border-r-gray-600 px-2 whitespace-nowrap">Sasia</div>
              <div className="w-1/3 text-right font-semibold text-gray-600 text-[12px] border border-r-gray-600 px-2 whitespace-nowrap">
                Gjeresia (Cm)
              </div>
              <div className="w-1/3 text-right font-semibold text-gray-600 text-[12px] border border-r-gray-600 px-2 whitespace-nowrap">
                Lartesia (Cm)
              </div>
              <div className="w-1/3 text-right font-semibold text-gray-600 text-[12px] border border-r-gray-600 px-2 whitespace-nowrap">
                Cmimi (Leke)
              </div>
              <div className="w-1/3 text-right font-semibold text-gray-600 text-[12px] px-2 whitespace-nowrap">Totali (Leke)</div>
            </div>

            {[
              { nr: 1, emertimi: 'Shishe uji 500ml', sasia: 10, gjeresia: 6, lartesia: 15, cmimi: 157000.998, totali: 357000 },
              { nr: 2, emertimi: 'Biskota çokolate', sasia: 5, gjeresia: 10, lartesia: 20, cmimi: 143500, totali: 357000 },
              { nr: 3, emertimi: 'Quell 1L', sasia: 8, gjeresia: 8, lartesia: 25, cmimi: 1.8, totali: 14.4 },
            ].map((item) => (
              <div key={item.nr}>
                <div className="border border-gray-300 border-dashed mb-2 bg-gray-100">
                  <div className="flex p-1">
                    <span className="w-1/6 text-gray-500 text-[12px] pl-1">{item.nr}</span>
                    <span className="w-1/2 text-right text-gray-500 text-[12px] border-gray-500 px-1">{item.emertimi}</span>
                    <span className="w-1/6 text-right text-gray-500 text-[12px] border-gray-500 px-3">{item.sasia}</span>
                    <span className="w-1/3 text-right text-gray-500 text-[12px] border-gray-500 px-3">{item.gjeresia}</span>
                    <span className="w-1/3 text-right text-gray-500 text-[12px] border-gray-500 px-3">{item.lartesia}</span>
                    <span className="w-1/3 text-right text-gray-500 text-[12px] border-gray-500 px-3">{item.cmimi}</span>
                    <span className="w-1/3 text-right text-gray-500 text-[12px] pr-3">{item.totali}</span>
                  </div>
                  <div className="bg-white text-gray-500 text-[12px] p-1">
                    <div>Image here</div>
                    <div>Other infos</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-row bg-gray-200 p-1 mb-2">
              <span className="w-full font-semibold text-gray-600 text-[12px]"></span>
              <span className="w-1/3 text-right font-semibold text-gray-600 text-[12px] px-2">Totali: 234303.422</span>
            </div>

            {/* Summary */}
            <div className="w-[200px] ml-auto">
              <div className="flex flex-row bg-gray-100 mb-[0.5px] p-1 border-b border-gray-300 border-dashed">
                <span className="w-full font-semibold text-gray-600 text-[12px]">Vlera</span>
                <span className="w-full text-right font-semibold text-gray-600 text-[12px] px-2">234000.34</span>
              </div>
              <div className="flex flex-row bg-gray-100 mb-[0.5px] p-1 border-b border-gray-300 border-dashed">
                <span className="w-full font-semibold text-gray-600 text-[12px]">Zbritje</span>
                <span className="w-full text-right font-semibold text-gray-600 text-[12px] px-2">50%</span>
              </div>
              <div className="flex flex-row bg-gray-100 mb-[0.5px] p-1 border-b border-gray-300 border-dashed">
                <span className="w-full font-semibold text-gray-600 text-[12px]">Vlera - zbritje</span>
                <span className="w-full text-right font-semibold text-gray-600 text-[12px] px-2">157000.17</span>
              </div>
              <div className="flex flex-row bg-gray-100 p-1 border-b border-gray-500 border-dashed">
                <span className="w-full font-semibold text-gray-600 text-[12px]">TVSH</span>
                <span className="w-full text-right font-semibold text-gray-600 text-[12px] px-2">1200%</span>
              </div>
              <div className="flex flex-row bg-gray-200 p-1 border-dashed">
                <span className="w-full font-semibold text-gray-600 text-[12px]">Totali</span>
                <span className="w-full text-right font-semibold text-gray-600 text-[12px] px-2">28090.4</span>
              </div>
            </div>
          </div>

          <div className="my-20 w-full h-[50px] flex flex-row item-center justify-around">
            <div className="text-[12px] text-gray-600 font-bold">
              <span>Faturoi: _____________</span>
            </div>
            <div className="text-[12px] text-gray-600 font-bold">
              <span>Pranoi: _____________</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pdf;
