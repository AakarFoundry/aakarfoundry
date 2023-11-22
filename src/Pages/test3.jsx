import React from 'react';
import { Button } from 'reactstrap';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf-viewer/react-pdf';
import { saveAs } from 'file-saver';

export const Test3 = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      flexGrow: 1,
    },
  });

  const handleDownload = async () => {
    const pdfBlob = await pdf().toBlob();
    saveAs(pdfBlob, 'example.pdf');
  };

  return (
    <>
      <PDFViewer width={600} height={400}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello World!</Text>
            </View>
            <View style={styles.section}>
              <Text>We're inside a PDF!</Text>
            </View>
            <View style={styles.section}>
              <Text>Hi!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>

      <Button onClick={handleDownload}>Download PDF</Button>
    </>
  );
};
