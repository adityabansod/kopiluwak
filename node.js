const { LoadClassAndExecute } = require('./jvm');
const sourceHex = `CAFEBABE 0000003B 00280A00 02000307 00040C00 05000601 00106A61 76612F6C 616E672F 4F626A65 63740100 063C696E 69743E01 00032829 56090008 00090700 0A0C000B 000C0100 0A48656C 6C6F576F 726C6401 000D696E 7374616E 63657661 6C756501 00014909 0008000E 0C000F00 0C010009 62617365 76616C75 650A0008 00030A00 0800120C 00130014 01000D61 6464656D 696E7374 616E6365 01000528 49492949 09001600 17070018 0C001900 1A010010 6A617661 2F6C616E 672F5379 7374656D 0100036F 75740100 154C6A61 76612F69 6F2F5072 696E7453 74726561 6D3B0A00 1C001D07 001E0C00 1F002001 00136A61 76612F69 6F2F5072 696E7453 74726561 6D010007 7072696E 746C6E01 00042849 29560100 04436F64 6501000F 4C696E65 4E756D62 65725461 626C6501 00046D61 696E0100 16285B4C 6A617661 2F6C616E 672F5374 72696E67 3B295601 00083C63 6C696E69 743E0100 0A536F75 72636546 696C6501 000F4865 6C6C6F57 6F726C64 2E6A6176 61002000 08000200 00000200 00000B00 0C000000 09000F00 0C000000 04000100 05000600 01002100 00002A00 02000100 00000A2A B700012A 06B50007 B1000000 01002200 00000E00 03000000 08000400 09000900 0A000100 13001400 01002100 00002500 02000300 00000DB2 000D1B60 1C602AB4 000760AC 00000001 00220000 00060001 0000000D 00090023 00240001 00210000 003D0003 00030000 0019BB00 0859B700 104C2B10 071008B6 00113DB2 00151CB6 001BB100 00000100 22000000 12000400 00001100 08001200 11001300 18001400 08002500 06000100 21000000 1E000100 00000000 06100AB3 000DB100 00000100 22000000 06000100 00000600 01002600 00000200 27`;
console.log(LoadClassAndExecute(sourceHex))