(function(){
	var loadHandler=window['q_{ACC9B034-87D9-4CAB-A3EB-22CE3642FA64}'];
	var quizInfo = "eyJkIjp7IlQiOiJVbnRpdGxlZCBRdWl6Iiwic2wiOnsiciI6eyJnIjpbeyJpIjoiYTVnb3p4aXVmbG4wLWR4NGJzMXdtMXRtbyIsInRwIjoiUmVzdWx0U2xpZGUiLCJEIjp7ImgiOiI8cCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojNGQ0ZDRkXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjMwcHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OmZudDFfMTA2MjNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj5Db25ncmF0dWxhdGlvbnMsIHlvdSBwYXNzZWQhPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIkNvbmdyYXR1bGF0aW9ucywgeW91IHBhc3NlZCEiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIFNlbWlib2xkIiwicyI6MzAsImMiOjUwNjYwNjEsImIiOmZhbHNlLCJpIjpmYWxzZSwidSI6ZmFsc2V9LCJwZiI6eyJ0IjoicCIsImEiOiJjZW50ZXIifX19LCJ2Ijp0cnVlLCJDIjp7IlJzIjp7InBzIjp7InYiOjgwLCJ1IjoicGVyY2VudHMifSwiYSI6MSwic2MiOnRydWUsImFwIjp0cnVlLCJzZyI6ZmFsc2UsImYiOnsidHAiOiJjbG9zZVdpbmRvdyIsInUiOiJodHRwOi8vIiwidCI6Il9zZWxmIn19fSwicyI6eyJ3Ijp7ImEiOiJub25lIn19LCJhIjp7ImwiOiJkZWZhdWx0IiwiTCI6ZmFsc2UsIm8iOlt7InRwIjoic2hhcGUiLCJJIjoiZGlyZWN0aW9uIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InJlc2l6ZVNoYXBlVG9GaXRUZXh0IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjE0LCJyIjoxNiwidCI6MywiYiI6NH19LCJiIjowLjN9LHsidHAiOiJpY29uUGxhY2Vob2xkZXIiLCJJIjoicGFzc2VkIiwiayI6ZmFsc2V9LHsidHAiOiJzaGFwZSIsIkkiOiJyZXZpZXdCdG4iLCJrIjpmYWxzZSwicyI6InJvdW5kZWRSZWN0YW5nbGUiLCJTIjp7ImIiOnsiZiI6ImdyYWRpZW50RmlsbCIsImciOnsidCI6ImxpbmVhciIsImMiOlt7InAiOjAsImMiOjYwNjcxNzUsImEiOjF9LHsicCI6MSwiYyI6NDQyMzM3NiwiYSI6MX1dLCJhIjo5MH19LCJzIjp7InQiOiJzb2xpZCIsInMiOjIsImQiOiIiLCJjIjoiYnV0dCIsImoiOiJtaXRlciIsIkMiOjM1Njg4MzcsImEiOjF9LCJhIjp7InQiOiIiLCJhIjp0cnVlfSwidCI6eyJhIjoic2hyaW5rVGV4dE9uT3ZlcmZsb3ciLCJ2IjoibWlkZGxlIiwidyI6dHJ1ZSwibCI6MTgsInIiOjE4LCJ0Ijo1LCJiIjo3fX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNXB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpPcGVuIFNhbnNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGRcIj5SRVZJRVcgUVVJWjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiUkVWSUVXIFFVSVoiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTUsImMiOjE2Nzc3MjE1LCJiIjp0cnVlfSwicGYiOnsidCI6InAiLCJhIjoiY2VudGVyIn19fX0seyJ0cCI6InNoYXBlIiwiSSI6InBhc3NpbmdTY29yZUxhYmVsIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InJlc2l6ZVNoYXBlVG9GaXRUZXh0IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjAsInIiOjAsInQiOjMsImIiOjN9fSwiYiI6MC4zLCJydCI6eyJoIjoiPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OmZudDBfMTA2MjNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj5QYXNzaW5nIFNjb3JlOjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD4iLCJyIjpbXSwiZCI6WyJQYXNzaW5nIFNjb3JlOiJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6ZmFsc2UsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6InJpZ2h0In19fX0seyJ0cCI6InNoYXBlIiwiSSI6InBhc3NpbmdTY29yZVZhbHVlIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InNocmlua1RleHRPbk92ZXJmbG93IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjAsInIiOjAsInQiOjMsImIiOjN9fSwiYiI6MC4zLCJydCI6eyJoIjoiPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTZweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6T3BlbiBTYW5zXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpib2xkXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPiVQQVNTSU5HX1BFUkNFTlQlJSAoJVBBU1NJTkdfU0NPUkUlIHBvaW50cyk8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiJVBBU1NJTkdfUEVSQ0VOVCUlICglUEFTU0lOR19TQ09SRSUgcG9pbnRzKSJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6dHJ1ZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoibGVmdCJ9fX19LHsidHAiOiJzaGFwZSIsIkkiOiJhd2FyZGVkU2NvcmVMYWJlbCIsImsiOmZhbHNlLCJzIjoidGV4dEJveCIsIlMiOnsiYiI6eyJmIjoibm9uZSJ9LCJzIjp7InQiOiJub25lIiwicyI6MSwiZCI6IiIsImMiOiJidXR0IiwiaiI6Im1pdGVyIn0sImEiOnsidCI6IiIsImEiOnRydWV9LCJ0Ijp7ImEiOiJyZXNpemVTaGFwZVRvRml0VGV4dCIsInYiOiJtaWRkbGUiLCJ3Ijp0cnVlLCJsIjowLCJyIjowLCJ0IjozLCJiIjozfX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzAwMDAwMFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQwXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+WW91ciBTY29yZTo8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiWW91ciBTY29yZToiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTYsImMiOjAsImIiOmZhbHNlLCJpIjpmYWxzZSwidSI6ZmFsc2V9LCJwZiI6eyJ0IjoicCIsImEiOiJyaWdodCJ9fX19LHsidHAiOiJzaGFwZSIsIkkiOiJhd2FyZGVkU2NvcmVWYWx1ZSIsImsiOmZhbHNlLCJzIjoidGV4dEJveCIsIlMiOnsiYiI6eyJmIjoibm9uZSJ9LCJzIjp7InQiOiJub25lIiwicyI6MSwiZCI6IiIsImMiOiJidXR0IiwiaiI6Im1pdGVyIn0sImEiOnsidCI6IiIsImEiOnRydWV9LCJ0Ijp7ImEiOiJzaHJpbmtUZXh0T25PdmVyZmxvdyIsInYiOiJtaWRkbGUiLCJ3Ijp0cnVlLCJsIjowLCJyIjowLCJ0IjozLCJiIjozfX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5Ok9wZW4gU2Fuc1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6Ym9sZFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj4lQVdBUkRFRF9QRVJDRU5UJSUgKCVBV0FSREVEX1NDT1JFJSBwb2ludHMpPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIiVBV0FSREVEX1BFUkNFTlQlJSAoJUFXQVJERURfU0NPUkUlIHBvaW50cykiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTYsImMiOjAsImIiOnRydWUsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19fV0sIkIiOltdLCJPIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJpIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJzIjoiRGVmYXVsdCJ9LCJhbiI6eyJ0Ijoibm9uZSIsImQiOiJmcm9tQm90dG9tIiwibSI6ImJ5SXRlbXMiLCJkdSI6MSwiZGUiOjB9fSx7ImkiOiJkZm9qa3ozNjVxZm0tZ210NXhld2x3OGMzIiwidHAiOiJSZXN1bHRTbGlkZSIsIkQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiM0ZDRkNGRcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MzBweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6Zm50MV8xMDYyM1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPllvdSBkaWQgbm90IHBhc3MuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIllvdSBkaWQgbm90IHBhc3MuIl0sInQiOnsidGYiOnsiZiI6Ik9wZW4gU2FucyBTZW1pYm9sZCIsInMiOjMwLCJjIjo1MDY2MDYxLCJiIjpmYWxzZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoiY2VudGVyIn19fSwidiI6dHJ1ZSwiQyI6eyJScyI6eyJwcyI6eyJ2IjowLCJ1IjoicGVyY2VudHMifSwiYSI6MSwic2MiOnRydWUsImFwIjp0cnVlLCJzZyI6ZmFsc2UsImYiOnsidHAiOiJjbG9zZVdpbmRvdyIsInUiOiJodHRwOi8vIiwidCI6Il9zZWxmIn19fSwicyI6eyJ3Ijp7ImEiOiJub25lIn19LCJhIjp7ImwiOiJkZWZhdWx0IiwiTCI6ZmFsc2UsIm8iOlt7InRwIjoic2hhcGUiLCJJIjoiZGlyZWN0aW9uIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InJlc2l6ZVNoYXBlVG9GaXRUZXh0IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjE0LCJyIjoxNiwidCI6MywiYiI6NH19LCJiIjowLjN9LHsidHAiOiJpY29uUGxhY2Vob2xkZXIiLCJJIjoiZmFpbGVkIiwiayI6ZmFsc2V9LHsidHAiOiJzaGFwZSIsIkkiOiJyZXZpZXdCdG4iLCJrIjpmYWxzZSwicyI6InJvdW5kZWRSZWN0YW5nbGUiLCJTIjp7ImIiOnsiZiI6ImdyYWRpZW50RmlsbCIsImciOnsidCI6ImxpbmVhciIsImMiOlt7InAiOjAsImMiOjYwNjcxNzUsImEiOjF9LHsicCI6MSwiYyI6NDQyMzM3NiwiYSI6MX1dLCJhIjo5MH19LCJzIjp7InQiOiJzb2xpZCIsInMiOjIsImQiOiIiLCJjIjoiYnV0dCIsImoiOiJtaXRlciIsIkMiOjM1Njg4MzcsImEiOjF9LCJhIjp7InQiOiIiLCJhIjp0cnVlfSwidCI6eyJhIjoic2hyaW5rVGV4dE9uT3ZlcmZsb3ciLCJ2IjoibWlkZGxlIiwidyI6dHJ1ZSwibCI6MTgsInIiOjE4LCJ0Ijo1LCJiIjo3fX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiNmZmZmZmZcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNXB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpPcGVuIFNhbnNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OmJvbGRcIj5SRVZJRVcgUVVJWjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiUkVWSUVXIFFVSVoiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTUsImMiOjE2Nzc3MjE1LCJiIjp0cnVlfSwicGYiOnsidCI6InAiLCJhIjoiY2VudGVyIn19fX0seyJ0cCI6InNoYXBlIiwiSSI6InBhc3NpbmdTY29yZUxhYmVsIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InJlc2l6ZVNoYXBlVG9GaXRUZXh0IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjAsInIiOjAsInQiOjMsImIiOjN9fSwiYiI6MC4zLCJydCI6eyJoIjoiPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OmZudDBfMTA2MjNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj5QYXNzaW5nIFNjb3JlOjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD4iLCJyIjpbXSwiZCI6WyJQYXNzaW5nIFNjb3JlOiJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6ZmFsc2UsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6InJpZ2h0In19fX0seyJ0cCI6InNoYXBlIiwiSSI6InBhc3NpbmdTY29yZVZhbHVlIiwiayI6ZmFsc2UsInMiOiJ0ZXh0Qm94IiwiUyI6eyJiIjp7ImYiOiJub25lIn0sInMiOnsidCI6Im5vbmUiLCJzIjoxLCJkIjoiIiwiYyI6ImJ1dHQiLCJqIjoibWl0ZXIifSwiYSI6eyJ0IjoiIiwiYSI6dHJ1ZX0sInQiOnsiYSI6InNocmlua1RleHRPbk92ZXJmbG93IiwidiI6Im1pZGRsZSIsInciOnRydWUsImwiOjAsInIiOjAsInQiOjMsImIiOjN9fSwiYiI6MC4zLCJydCI6eyJoIjoiPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTZweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6T3BlbiBTYW5zXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpib2xkXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPiVQQVNTSU5HX1BFUkNFTlQlJSAoJVBBU1NJTkdfU0NPUkUlIHBvaW50cyk8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiJVBBU1NJTkdfUEVSQ0VOVCUlICglUEFTU0lOR19TQ09SRSUgcG9pbnRzKSJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6dHJ1ZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoibGVmdCJ9fX19LHsidHAiOiJzaGFwZSIsIkkiOiJhd2FyZGVkU2NvcmVMYWJlbCIsImsiOmZhbHNlLCJzIjoidGV4dEJveCIsIlMiOnsiYiI6eyJmIjoibm9uZSJ9LCJzIjp7InQiOiJub25lIiwicyI6MSwiZCI6IiIsImMiOiJidXR0IiwiaiI6Im1pdGVyIn0sImEiOnsidCI6IiIsImEiOnRydWV9LCJ0Ijp7ImEiOiJyZXNpemVTaGFwZVRvRml0VGV4dCIsInYiOiJtaWRkbGUiLCJ3Ijp0cnVlLCJsIjowLCJyIjowLCJ0IjozLCJiIjozfX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzAwMDAwMFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQwXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+WW91ciBTY29yZTo8L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3A+IiwiciI6W10sImQiOlsiWW91ciBTY29yZToiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTYsImMiOjAsImIiOmZhbHNlLCJpIjpmYWxzZSwidSI6ZmFsc2V9LCJwZiI6eyJ0IjoicCIsImEiOiJyaWdodCJ9fX19LHsidHAiOiJzaGFwZSIsIkkiOiJhd2FyZGVkU2NvcmVWYWx1ZSIsImsiOmZhbHNlLCJzIjoidGV4dEJveCIsIlMiOnsiYiI6eyJmIjoibm9uZSJ9LCJzIjp7InQiOiJub25lIiwicyI6MSwiZCI6IiIsImMiOiJidXR0IiwiaiI6Im1pdGVyIn0sImEiOnsidCI6IiIsImEiOnRydWV9LCJ0Ijp7ImEiOiJzaHJpbmtUZXh0T25PdmVyZmxvdyIsInYiOiJtaWRkbGUiLCJ3Ijp0cnVlLCJsIjowLCJyIjowLCJ0IjozLCJiIjozfX0sImIiOjAuMywicnQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5Ok9wZW4gU2Fuc1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6Ym9sZFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj4lQVdBUkRFRF9QRVJDRU5UJSUgKCVBV0FSREVEX1NDT1JFJSBwb2ludHMpPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIiVBV0FSREVEX1BFUkNFTlQlJSAoJUFXQVJERURfU0NPUkUlIHBvaW50cykiXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTYsImMiOjAsImIiOnRydWUsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19fV0sIkIiOltdLCJPIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJpIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJzIjoiRGVmYXVsdCJ9LCJhbiI6eyJ0Ijoibm9uZSIsImQiOiJmcm9tQm90dG9tIiwibSI6ImJ5SXRlbXMiLCJkdSI6MSwiZGUiOjB9fV0sInMiOlt7ImkiOiJndWJqMXl4MXFxbDItbTdzZ3A5N2FoMmFnIiwidHAiOiJSZXN1bHRTbGlkZSIsIkQiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiM0ZDRkNGRcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MzBweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6Zm50MV8xMDYyM1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPlRoYW5rIHlvdSBmb3IgeW91ciBhbnN3ZXIuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIlRoYW5rIHlvdSBmb3IgeW91ciBhbnN3ZXIuIl0sInQiOnsidGYiOnsiZiI6Ik9wZW4gU2FucyBTZW1pYm9sZCIsInMiOjMwLCJjIjo1MDY2MDYxLCJiIjpmYWxzZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoiY2VudGVyIn19fSwidiI6dHJ1ZSwiQyI6eyJScyI6eyJwcyI6eyJ2Ijo4MCwidSI6InBlcmNlbnRzIn0sImEiOjEsInNjIjp0cnVlLCJhcCI6dHJ1ZSwic2ciOmZhbHNlLCJmIjp7InRwIjoiY2xvc2VXaW5kb3ciLCJ1IjoiaHR0cDovLyIsInQiOiJfc2VsZiJ9fX0sInMiOnsidyI6eyJhIjoibm9uZSJ9fSwiYSI6eyJsIjoiZGVmYXVsdCIsIkwiOmZhbHNlLCJvIjpbeyJ0cCI6InNoYXBlIiwiSSI6ImRpcmVjdGlvbiIsImsiOmZhbHNlLCJzIjoidGV4dEJveCIsIlMiOnsiYiI6eyJmIjoibm9uZSJ9LCJzIjp7InQiOiJub25lIiwicyI6MSwiZCI6IiIsImMiOiJidXR0IiwiaiI6Im1pdGVyIn0sImEiOnsidCI6IiIsImEiOnRydWV9LCJ0Ijp7ImEiOiJyZXNpemVTaGFwZVRvRml0VGV4dCIsInYiOiJtaWRkbGUiLCJ3Ijp0cnVlLCJsIjoxNCwiciI6MTYsInQiOjMsImIiOjR9fSwiYiI6MC4zfSx7InRwIjoiaWNvblBsYWNlaG9sZGVyIiwiSSI6InBhc3NlZCIsImsiOmZhbHNlfV0sIkIiOltdLCJPIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJpIjp7Im8iOiJ7XCJtZWRpYVBsYWNlaG9sZGVyXCI6MSxcInNsaWRlUGljdHVyZVwiOjEsXCJzbGlkZVZpZGVvXCI6MSxcInNsaWRlQXVkaW9cIjoxLFwiaW1hZ2VcIjoxLFwidmlkZW9cIjoxLFwiaWNvblBsYWNlaG9sZGVyXCI6MSxcInNoYXBlXCI6MSxcImxpbmVcIjoxfSIsInMiOiJ7XCJyZWN0YW5nbGVcIjoxLFwicm91bmRlZFJlY3RhbmdsZVwiOjEsXCJlbGxpcHNlXCI6MSxcInRleHRCb3hcIjoxLFwidHJpYW5nbGVcIjoxLFwiZnJlZWZvcm1cIjoxfSJ9LCJzIjoiRGVmYXVsdCJ9LCJhbiI6eyJ0Ijoibm9uZSIsImQiOiJmcm9tQm90dG9tIiwibSI6ImJ5SXRlbXMiLCJkdSI6MSwiZGUiOjB9fV0sInQiOiJzdXJ2ZXkiLCJmIjp7InRwIjoiY2xvc2VXaW5kb3ciLCJ1IjoiaHR0cDovLyIsInQiOiJfc2VsZiJ9fSwiZyI6W3siaSI6InJ3NHEwOTNlODFzZS1uZXZtdnc2eGh1YSIsIlQiOiJRdWVzdGlvbiBHcm91cCIsInMiOnsicnMiOi0xLCJzdCI6ImFsbFF1ZXN0aW9ucyIsInVwIjp0cnVlLCJwcyI6eyJ1IjoicGVyY2VudHMiLCJ2Ijo4MH19LCJTIjpbeyJpIjoiYXZjYTc5OHoweW53LTMyenpidWozOWt6IiwidHAiOiJUeXBlSW4iLCJEIjp7ImgiOiI8cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzRkNGQ0ZFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQxXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+VGhpbmtpbmcgYWJvdXQgeW91ciBidXNpbmVzcywgYW5zd2VyIHRoZSBmb2xsb3dpbmcgcXVlc3Rpb25zLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD48cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48YnI+4oCLPHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiM0ZDRkNGRcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MThweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6Zm50MV8xMDYyM1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPkRvIHlvdSBoYXZlIGEgaG9tZSBvZmZpY2U/IElzIGl0IOKAnG9yZGluYXJ5IGFuZCBuZWNlc3NhcnnigJ0gZm9yIHlvdXIgYnVzaW5lc3MgdG8gaGF2ZSBhIGhvbWUgb2ZmaWNlPyBXaGF0IGV4cGVuc2VzIGNvdWxkIGJlIGRlZHVjdGVkIHJlbGF0ZWQgdG8geW91ciBvZmZpY2U/PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PGJyPuKAizwvcD48cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzRkNGQ0ZFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQyXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+UGxlYXNlIG5vdGUsIHRoaXMgcXVlc3Rpb24gaXMgb3BlbiBlbmRlZCBhbmQgY2Fubm90IGJlIGdyYWRlZCB3aXRoaW4gdGhpcyBjb3Vyc2UuIFRvIGRpc2N1c3MgeW91ciBhbnN3ZXIgZnVydGhlciwgcGxlYXNlIGNvbnRhY3QgU2NyYXBib29rIEFjY291bnRpbmcgZm9yIGEgcHJpdmF0ZSBjb25zdWx0YXRpb24uPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIlRoaW5raW5nIGFib3V0IHlvdXIgYnVzaW5lc3MsIGFuc3dlciB0aGUgZm9sbG93aW5nIHF1ZXN0aW9ucy5cbiBEbyB5b3UgaGF2ZSBhIGhvbWUgb2ZmaWNlPyBJcyBpdCDigJxvcmRpbmFyeSBhbmQgbmVjZXNzYXJ54oCdIGZvciB5b3VyIGJ1c2luZXNzIHRvIGhhdmUgYSBob21lIG9mZmljZT8gV2hhdCBleHBlbnNlcyBjb3VsZCBiZSBkZWR1Y3RlZCByZWxhdGVkIHRvIHlvdXIgb2ZmaWNlPyBcblBsZWFzZSBub3RlLCB0aGlzIHF1ZXN0aW9uIGlzIG9wZW4gZW5kZWQgYW5kIGNhbm5vdCBiZSBncmFkZWQgd2l0aGluIHRoaXMgY291cnNlLiBUbyBkaXNjdXNzIHlvdXIgYW5zd2VyIGZ1cnRoZXIsIHBsZWFzZSBjb250YWN0IFNjcmFwYm9vayBBY2NvdW50aW5nIGZvciBhIHByaXZhdGUgY29uc3VsdGF0aW9uLiJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMgU2VtaWJvbGQiLCJzIjoxOCwiYyI6NTA2NjA2MSwiYiI6ZmFsc2UsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19LCJ2Ijp0cnVlLCJDIjp7ImNocyI6W119LCJzIjp7ImVlIjpmYWxzZSwibXMiOnRydWUsIkIiOnsidCI6ImJ5UXVlc3Rpb24ifSwiRiI6eyJjIjp7InYiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OmZudDBfMTA2MjNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj5UaGF0JiMzOTtzIHJpZ2h0ISBZb3UgY2hvc2UgdGhlIGNvcnJlY3QgcmVzcG9uc2UuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIlRoYXQncyByaWdodCEgWW91IGNob3NlIHRoZSBjb3JyZWN0IHJlc3BvbnNlLiJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6ZmFsc2UsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19fSwiaSI6eyJ2Ijp7ImgiOiI8cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzAwMDAwMFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQwXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+WW91IGRpZCBub3QgY2hvb3NlIHRoZSBjb3JyZWN0IHJlc3BvbnNlLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD4iLCJyIjpbXSwiZCI6WyJZb3UgZGlkIG5vdCBjaG9vc2UgdGhlIGNvcnJlY3QgcmVzcG9uc2UuIl0sInQiOnsidGYiOnsiZiI6Ik9wZW4gU2FucyIsInMiOjE2LCJjIjowLCJiIjpmYWxzZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoibGVmdCJ9fX19LCJhdCI6eyJ2Ijp7ImgiOiI8cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzAwMDAwMFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQwXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+WW91IGRpZCBub3QgY2hvb3NlIHRoZSBjb3JyZWN0IHJlc3BvbnNlLiBQbGVhc2UgdHJ5IGFnYWluLjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD48cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4O2ZvbnQtZmFtaWx5OmZudDBfMTA2MjM7XCI+4oCLPC9zcGFuPjwvcD48cCBzdHlsZT1cInRleHQtYWxpZ246bGVmdDtcIj48c3BhbiBkYXRhLWZvcm1hdC10YWctaWQ9XCJjb2xvclwiIHN0eWxlPVwiY29sb3I6IzAwMDAwMFwiPjxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmVcIj48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToxNnB4XCI+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTpmbnQwXzEwNjIzXCI+PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWxcIj48c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6bm9ybWFsXCI+WW91IGhhdmUgJUFOU1dFUl9BVFRFTVBUUyUgYXR0ZW1wdHMuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIllvdSBkaWQgbm90IGNob29zZSB0aGUgY29ycmVjdCByZXNwb25zZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cblxuWW91IGhhdmUgJUFOU1dFUl9BVFRFTVBUUyUgYXR0ZW1wdHMuIl0sInQiOnsidGYiOnsiZiI6Ik9wZW4gU2FucyIsInMiOjE2LCJjIjowLCJiIjpmYWxzZSwiaSI6ZmFsc2UsInUiOmZhbHNlfSwicGYiOnsidCI6InAiLCJhIjoibGVmdCJ9fX19LCJhIjp7InYiOnsiaCI6IjxwIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O1wiPjxzcGFuIGRhdGEtZm9ybWF0LXRhZy1pZD1cImNvbG9yXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+PHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjE2cHhcIj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OmZudDBfMTA2MjNcIj48c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0Om5vcm1hbFwiPjxzcGFuIHN0eWxlPVwiZm9udC1zdHlsZTpub3JtYWxcIj5UaGFuayB5b3UgZm9yIHlvdXIgYW5zd2VyITwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvcD4iLCJyIjpbXSwiZCI6WyJUaGFuayB5b3UgZm9yIHlvdXIgYW5zd2VyISJdLCJ0Ijp7InRmIjp7ImYiOiJPcGVuIFNhbnMiLCJzIjoxNiwiYyI6MCwiYiI6ZmFsc2UsImkiOmZhbHNlLCJ1IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19fSwicGMiOnsidiI6eyJoIjoiPHAgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCI+PHNwYW4gZGF0YS1mb3JtYXQtdGFnLWlkPVwiY29sb3JcIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj48c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lXCI+PHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTZweFwiPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6Zm50MF8xMDYyM1wiPjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6bm9ybWFsXCI+PHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOm5vcm1hbFwiPlRoYXQmIzM5O3Mgbm90IGV4YWN0bHkgdGhlIGNvcnJlY3QgcmVzcG9uc2UuPC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj48L3NwYW4+PC9wPiIsInIiOltdLCJkIjpbIlRoYXQncyBub3QgZXhhY3RseSB0aGUgY29ycmVjdCByZXNwb25zZS4iXSwidCI6eyJ0ZiI6eyJmIjoiT3BlbiBTYW5zIiwicyI6MTYsImMiOjAsImIiOmZhbHNlLCJpIjpmYWxzZSwidSI6ZmFsc2UsInN0IjpmYWxzZX0sInBmIjp7InQiOiJwIiwiYSI6ImxlZnQifX19fSwiZ3QiOiJieVF1ZXN0aW9uIiwic3QiOiJub25lIn0sInciOnsiYSI6Im5vbmUifX0sImEiOnsibCI6ImRlZmF1bHQiLCJMIjpmYWxzZSwibyI6W3sidHAiOiJzaGFwZSIsIkkiOiJkaXJlY3Rpb24iLCJrIjpmYWxzZSwicyI6InRleHRCb3giLCJTIjp7ImIiOnsiZiI6Im5vbmUifSwicyI6eyJ0Ijoibm9uZSIsInMiOjEsImQiOiIiLCJjIjoiYnV0dCIsImoiOiJtaXRlciJ9LCJhIjp7InQiOiIiLCJhIjp0cnVlfSwidCI6eyJhIjoicmVzaXplU2hhcGVUb0ZpdFRleHQiLCJ2IjoibWlkZGxlIiwidyI6dHJ1ZSwibCI6MTQsInIiOjE2LCJ0Ijo5LCJiIjoxMn19LCJiIjowLjN9LHsidHAiOiJzaGFwZSIsIkkiOiJjb250ZW50IiwiayI6ZmFsc2UsInMiOiJyZWN0YW5nbGUiLCJTIjp7ImIiOnsiZiI6Im5vbmUifSwicyI6eyJ0Ijoibm9uZSIsInMiOjEsImQiOiIiLCJjIjoiYnV0dCIsImoiOiJtaXRlciJ9LCJhIjp7InQiOiIiLCJhIjp0cnVlfSwidCI6eyJhIjoicmVzaXplU2hhcGVUb0ZpdFRleHQiLCJ2IjoibWlkZGxlIiwidyI6dHJ1ZSwibCI6MCwiciI6MCwidCI6MCwiYiI6MH19LCJiIjowLjN9XSwiQiI6W10sIk8iOnsibyI6IntcIm1lZGlhUGxhY2Vob2xkZXJcIjoxLFwic2xpZGVQaWN0dXJlXCI6MSxcInNsaWRlVmlkZW9cIjoxLFwic2xpZGVBdWRpb1wiOjEsXCJpbWFnZVwiOjEsXCJ2aWRlb1wiOjEsXCJpY29uUGxhY2Vob2xkZXJcIjoxLFwic2hhcGVcIjoxLFwibGluZVwiOjF9IiwicyI6IntcInJlY3RhbmdsZVwiOjEsXCJyb3VuZGVkUmVjdGFuZ2xlXCI6MSxcImVsbGlwc2VcIjoxLFwidGV4dEJveFwiOjEsXCJ0cmlhbmdsZVwiOjEsXCJmcmVlZm9ybVwiOjF9In0sImkiOnsibyI6IntcIm1lZGlhUGxhY2Vob2xkZXJcIjoxLFwic2xpZGVQaWN0dXJlXCI6MSxcInNsaWRlVmlkZW9cIjoxLFwic2xpZGVBdWRpb1wiOjEsXCJpbWFnZVwiOjEsXCJ2aWRlb1wiOjEsXCJpY29uUGxhY2Vob2xkZXJcIjoxLFwic2hhcGVcIjoxLFwibGluZVwiOjF9IiwicyI6IntcInJlY3RhbmdsZVwiOjEsXCJyb3VuZGVkUmVjdGFuZ2xlXCI6MSxcImVsbGlwc2VcIjoxLFwidGV4dEJveFwiOjEsXCJ0cmlhbmdsZVwiOjEsXCJmcmVlZm9ybVwiOjF9In0sInMiOiJEZWZhdWx0In0sImFuIjp7InQiOiJub25lIiwiZCI6ImZyb21Cb3R0b20iLCJtIjoiYnlJdGVtcyIsImR1IjoxLCJkZSI6MH19XX1dfSwicyI6eyJxIjp7InN0IjoiZWFjaFF1ZXN0aW9uIiwiYWIiOmZhbHNlLCJhcCI6ZmFsc2UsImNvIjpmYWxzZSwibnQiOiJmcmVlIiwicm0iOiJwcm9tcHQiLCJwc3QiOiJzdXJ2ZXkiLCJxcyI6eyJ3Ijo3MjAsImgiOjQwNX0sInQiOnsiZSI6ZmFsc2UsInYiOjM2MDB9LCJzcCI6eyJycyI6LTEsInN0Ijoic2VsZWN0R3JvdXBzIiwic3EiOmZhbHNlfX0sImQiOnsicHQiOjEwLCJwIjowLCJhdHAiOjAsImEiOjEsInNoIjp0cnVlLCJhcCI6ZmFsc2UsIkEiOmZhbHNlLCJzc3EiOnRydWUsInNnZiI6dHJ1ZSwic3NmIjpmYWxzZSwiZnYiOnsiYyI6IlRoYXQncyByaWdodCEgWW91IGNob3NlIHRoZSBjb3JyZWN0IHJlc3BvbnNlLiIsImkiOiJZb3UgZGlkIG5vdCBjaG9vc2UgdGhlIGNvcnJlY3QgcmVzcG9uc2UuIiwiYXQiOiJZb3UgZGlkIG5vdCBjaG9vc2UgdGhlIGNvcnJlY3QgcmVzcG9uc2UuIFBsZWFzZSB0cnkgYWdhaW4uXG5cbllvdSBoYXZlICVBTlNXRVJfQVRURU1QVFMlIGF0dGVtcHRzLiIsImEiOiJUaGFuayB5b3UgZm9yIHlvdXIgYW5zd2VyISIsInBjIjoiVGhhdCdzIG5vdCBleGFjdGx5IHRoZSBjb3JyZWN0IHJlc3BvbnNlLiJ9LCJ0Ijp7ImUiOmZhbHNlLCJ2Ijo2MH19LCJyIjp7ImFkcyI6eyJlIjpmYWxzZSwidWEiOmZhbHNlLCJjYSI6ZmFsc2UsImYiOmZhbHNlLCJ4IjoicGFzc2VkQW5kRmFpbGVkIiwiZW0iOiIifSwic3RzIjp7ImUiOmZhbHNlLCJ1YSI6dHJ1ZSwiY2EiOnRydWUsImYiOmZhbHNlLCJ4IjoicGFzc2VkQW5kRmFpbGVkIiwiZW0iOiIifSwicnQiOnsiZiI6ImlTcHJpbmcgU29sdXRpb25zIiwic2oiOiJbQ29tcGxldGVdIFN1cnZleSByZXN1bHRzOiBcIiVRVUlaX1RJVExFJVwiIiwiYyI6IkhlbGxvIVxuXG5IZXJlIHlvdSBjYW4gcmV2aWV3IHRoZSBzdXJ2ZXkgcmVzdWx0cyBmb3IgXCIlUVVJWl9USVRMRSVcIi4ifSwic3MiOnsiZSI6ZmFsc2UsInUiOiIifSwianNzIjp7ImUiOmZhbHNlLCJzIjoiIiwidCI6Il9ibGFuayJ9fSwibCI6eyJkIjoibGVhNTRpd3A2OTM4LWQwa2k1bHUwcTd0YiIsImkiOlt7Im4iOiJEaXNhZ3JlZS9BZ3JlZSIsImlkIjoibGVhNTRpd3A2OTM4LWQwa2k1bHUwcTd0YiIsImxiIjpbIlN0cm9uZ2x5IERpc2FncmVlIiwiRGlzYWdyZWUiLCJVbmNlcnRhaW4iLCJBZ3JlZSIsIlN0cm9uZ2x5IEFncmVlIl19LHsibiI6IkhhcmQvRWFzeSIsImlkIjoiYXE1ZXB6Y3NuaHJqLWFjZHgxZG5sc3J2NiIsImxiIjpbIlZlcnkgSGFyZCIsIkhhcmQiLCJOZXV0cmFsIiwiRWFzeSIsIlZlcnkgRWFzeSJdfSx7Im4iOiJIYXBweS9VbmhhcHB5IiwiaWQiOiJlcm50bnZmd2l2enItY3J3ejlra2drYzVwIiwibGIiOlsiVmVyeSBVbmhhcHB5IiwiVW5oYXBweSIsIk5ldXRyYWwiLCJIYXBweSIsIlZlcnkgSGFwcHkiXX0seyJuIjoiWWVzL05vIiwiaWQiOiJzbGR6MmU4ZXp2dDAtbTgwMnh3NWRjc2c2IiwibGIiOlsiWWVzIiwiTm8iXX0seyJuIjoiUG9vci9FeGNlbGxlbnQiLCJpZCI6InN4OHhkcWwwaWp3OC01YmE4cTBoNGozMnEiLCJsYiI6WyJQb29yIiwiQmVsb3cgQXZlcmFnZSIsIkF2ZXJhZ2UiLCJBYm92ZSBBdmVyYWdlIiwiRXhjZWxsZW50Il19LHsibiI6Ik5vdCBMaWtlbHkvTGlrZWx5IiwiaWQiOiI3c3hxdXJnbWgzc3ctZHd4cWdldjR0aTl1IiwibGIiOlsiTm90IEF0IEFsbCBMaWtlbHkiLCJOb3QgU28gTGlrZWx5IiwiU29tZXdoYXQgTGlrZWx5IiwiVmVyeSBMaWtlbHkiLCJFeHRyZW1lbHkgTGlrZWx5Il19LHsibiI6IkRpc3NhdGlzZmllZC9TYXRpc2ZpZWQiLCJpZCI6InFkdm9tdXA0Ym95cS1xYWQyZjU2a256M2giLCJsYiI6WyJWZXJ5IERpc3NhdGlzZmllZCIsIkRpc3NhdGlzZmllZCIsIk5ldXRyYWwiLCJTYXRpc2ZpZWQiLCJWZXJ5IFNhdGlzZmllZCJdfV19fSwic2siOnsibSI6eyJkIjoiRW5nbGlzaCIsIm0iOnsiQVVUSE9SSVpBVElPTl9GT1JNX0VSUk9SX0VNQUlMIjoiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyIsIkFVVEhPUklaQVRJT05fRk9STV9FUlJPUl9GSUVMRF9SRVFVSVJFRCI6IkZpZWxkIGlzIHJlcXVpcmVkIiwiQVVUSE9SSVpBVElPTl9GT1JNX1NFTkRfVE9fU1RVREVOVF9FTUFJTF9ISU5UIjoiUmVzdWx0cyB3aWxsIGJlIHNlbnQgdG8gdGhpcyBlbWFpbCIsIlBCX0JBQ0tfVE9fQVBQX0JVVFRPTl9MQUJFTCI6IkJhY2siLCJQQl9DSE9PU0VfQU5TV0VSX0xBQkVMIjoiWW91IG11c3QgY29tcGxldGUgdGhlIHF1ZXN0aW9uIGJlZm9yZSBzdWJtaXR0aW5nLiIsIlBCX0NMRUFSX0hPVFNQT1RTX0JVVFRPTl9MQUJFTCI6IlJFU0VUIiwiUEJfQ09OVFJPTF9QQU5FTF9FWElUX1JFVklFV19CVVRUT05fTEFCRUwiOiJDTE9TRSBSRVZJRVciLCJQQl9DT05UUk9MX1BBTkVMX0ZJTklTSF9RVUlaX0JVVFRPTl9MQUJFTCI6IkNMT1NFIiwiUEJfQ09OVFJPTF9QQU5FTF9SRVRBS0VfUVVJWl9CVVRUT05fTEFCRUwiOiJSRVRSWSBRVUlaIiwiUEJfQ09OVFJPTF9QQU5FTF9SRVZJRVdfUVVJWl9CVVRUT05fTEFCRUwiOiJSRVZJRVcgUVVJWiIsIlBCX0NPTlRST0xfUEFORUxfUkVWSUVXX1NVUlZFWV9CVVRUT05fTEFCRUwiOiJSRVZJRVcgU1VSVkVZIiwiUEJfQ1VNVUxBVElWRV9TQ09SRV9MQUJFTCI6IllvdXIgU2NvcmU6ICVVU0VSX1BPSU5UUyUgb2YgJVRPVEFMX1BPSU5UUyUiLCJQQl9ESUFMT0dfQk9YX0NBTkNFTF9CVVRUT04iOiJDQU5DRUwiLCJQQl9ESUFMT0dfQk9YX0NPTlRJTlVFX0JVVFRPTiI6IkNPTlRJTlVFIiwiUEJfRElBTE9HX0JPWF9FTkRfUVVJWl9CVVRUT04iOiJTVUJNSVQgQUxMIiwiUEJfRElBTE9HX0JPWF9OT19CVVRUT04iOiJOTyIsIlBCX0RJQUxPR19CT1hfT0tfQlVUVE9OIjoiT0siLCJQQl9ESUFMT0dfQk9YX1JFVFVSTl9UT19RVUlaX0JVVFRPTiI6IlJFVFVSTiBUTyBRVUlaIiwiUEJfRElBTE9HX0JPWF9UUllfQUdBSU5fQlVUVE9OIjoiVFJZIEFHQUlOIiwiUEJfRElBTE9HX0JPWF9WSUVXX1JFU1VMVFNfQlVUVE9OIjoiVklFVyBSRVNVTFRTIiwiUEJfRElBTE9HX0JPWF9ZRVNfQlVUVE9OIjoiWUVTIiwiUEJfRkVFREJBQ0tfVU5MSU1JVEVEX0FUVEVNUFRTIjoiVW5saW1pdGVkIiwiUEJfRlJFRV9MT0dPX0NSRUFURURfV0lUSCI6IkNyZWF0ZWQgd2l0aCIsIlBCX0ZSRUVfTE9HT19HT19VUkwiOiJodHRwOi8vd3d3LmlzcHJpbmdzb2x1dGlvbnMuY29tL2dvL2Zyb20taXNwcmluZy1mcmVlLXBsYXllcj9wPWlzZnJlZSZ2PTkuNy4xLjM0NTAmaGlkPVdwZTdUakYlMkY5cVhheWpNOEJMTFV5SXNLYUZvJTNEJnNhaWQ9MTk0ODQ2NCZnYWlkPTg3ODk2MDE5NS4xNTU3MzUzMzQ3IiwiUEJfR1JBREVEX1FVRVNUSU9OX0NPUlJFQ1QiOiJDb3JyZWN0IiwiUEJfR1JBREVEX1FVRVNUSU9OX0lOQ09SUkVDVCI6IkluY29ycmVjdCIsIlBCX0dSQURFRF9RVUVTVElPTl9QQVJUSUFMTFlfQ09SUkVDVCI6IlBhcnRpYWxseSDQoW9ycmVjdCIsIlBCX0lOVkFMSURfQlJBTkNISU5HX01FU1NBR0UiOiJVbmFibGUgdG8gbmF2aWdhdGUgdG8gdGhlIG5leHQgcXVlc3Rpb24gYmVjYXVzZSBpdCB3YXNuJ3QgaW5jbHVkZWQgaW4gdGhpcyBxdWl6LiIsIlBCX01JTklfU0tJTl9BTlNXRVJfQ0hPSUNFU19ESUFMT0dfVElUTEUiOiJTZWxlY3QgYW4gQW5zd2VyIiwiUEJfTUlOSV9TS0lOX0RJQUxPR19TVUJNSVRfQlVUVE9OIjoiRE9ORSIsIlBCX01JTklfU0tJTl9OT1RfQU5TV0VSRURfUVVFU1RJT04iOiJOb3QgQW5zd2VyZWQiLCJQQl9NSU5JX1NLSU5fTk9UX0FOU1dFUkVEX1NVUlZFWV9RVUVTVElPTiI6Ik5vdCBBbnN3ZXJlZCIsIlBCX01JTklfU0tJTl9RVUVTVElPTl9MSVNUX1RJVExFIjoiUXVlc3Rpb25zIiwiUEJfTUlOSV9TS0lOX1FVSVpfUkVWSUVXX1RJVExFIjoiUXVpeiBSZXZpZXciLCJQQl9NSU5JX1NLSU5fVEFQX1RPX0FOU1dFUl9RVUVTVElPTiI6IlRhcCB0byBhbnN3ZXIgdGhpcyBxdWVzdGlvbiIsIlBCX01JTklfU0tJTl9UWVBFX0NVU1RPTV9BTlNXRVIiOiJUeXBlIGN1c3RvbSBhbnN3ZXIiLCJQQl9NSU5JX1NLSU5fWk9PTV9TQ1JFRU5fVElQIjoiWW91IGNhbiB6b29tIGluIGFuZCBvdXQgdXNpbmcgUGluY2ggLyBTcHJlYWQgZ2VzdHVyZXMiLCJQQl9ORVhUX1NMSURFX0JVVFRPTl9MQUJFTCI6Ik5FWFQiLCJQQl9QT1NUUE9ORV9CVVRUT05fTEFCRUwiOiJQT1NUUE9ORSIsIlBCX1BSRVZJT1VTX1NMSURFX0JVVFRPTl9MQUJFTCI6IlBSRVYiLCJQQl9QUklOVF9BTlNXRVJFRF9RVUVTVElPTlMiOiJBbnN3ZXJlZDoiLCJQQl9QUklOVF9BVFRFTVBUUyI6IkF0dGVtcHRzIiwiUEJfUFJJTlRfQVdBUkRFRF9USVRMRSI6IkF3YXJkZWQiLCJQQl9QUklOVF9DT1JSRUNUIjoiQ29ycmVjdCIsIlBCX1BSSU5UX0NPUlJFQ1RfQU5TV0VSIjoiQ29ycmVjdCBBbnN3ZXIiLCJQQl9QUklOVF9EQVRFX1RJTUVfVEFCTEVfTEFCRUwiOiJEYXRlL1RpbWU6IiwiUEJfUFJJTlRfREVTVElOQVRJT04iOiJSZXNwb25zZSBTcG90IiwiUEJfUFJJTlRfREVUQUlMRURfUkVQT1JUX1RJVExFIjoiRGV0YWlsZWQgUmVwb3J0IiwiUEJfUFJJTlRfRkFJTEVEX1FVSVoiOiJGYWlsZWQiLCJQQl9QUklOVF9GRUVEQkFDSyI6IkZlZWRiYWNrIiwiUEJfUFJJTlRfSU5DT1JSRUNUIjoiSW5jb3JyZWN0IiwiUEJfUFJJTlRfTEFCRUwiOiJQUklOVCBSRVNVTFRTIiwiUEJfUFJJTlRfUEFSVElBTExZX0NPUlJFQ1QiOiJQYXJ0aWFsbHkg0KFvcnJlY3QiLCJQQl9QUklOVF9QQVNTRURfUVVJWiI6IlBhc3NlZCIsIlBCX1BSSU5UX1BBU1NJTkdfU0NPUkVfTEFCRUwiOiJQYXNzaW5nIFNjb3JlOiIsIlBCX1BSSU5UX1BPSU5UU19USVRMRSI6IlBvaW50cyIsIlBCX1BSSU5UX1FVRVNUSU9OX1RJVExFIjoiUXVlc3Rpb24iLCJQQl9QUklOVF9SRVNVTFRTX0hFQURFUiI6IlF1aXogUmVzdWx0cyBcIiVRVUlaX1RJVExFJVwiIiwiUEJfUFJJTlRfUkVTVUxUX0JZX1FVRVNUSU9OIjoiUXVlc3Rpb25zIiwiUEJfUFJJTlRfUkVTVUxUX0JZX1NFQ1RJT04iOiJRdWl6IFNlY3Rpb25zIiwiUEJfUFJJTlRfUkVTVUxUX0xBQkVMIjoiUmVzdWx0IiwiUEJfUFJJTlRfUkVTVUxUX1RJVExFIjoiUmVzdWx0IiwiUEJfUFJJTlRfU1RVREVOVF9TQ09SRV9MQUJFTCI6IllvdXIgU2NvcmU6IiwiUEJfUFJJTlRfU1VSVkVZIjoiU3VydmV5IiwiUEJfUFJJTlRfU1VSVkVZX1JFU1VMVFNfSEVBREVSIjoiU3VydmV5IFJlc3VsdHMgXCIlUVVJWl9USVRMRSVcIiIsIlBCX1BSSU5UX1RJTUVfU1BFTlQiOiJUaW1lIFNwZW50OiIsIlBCX1BSSU5UX1VTRVJfQU5TV0VSIjoiVXNlciBBbnN3ZXIiLCJQQl9QUklOVF9VU0VSX0VNQUlMIjoiRW1haWw6IiwiUEJfUFJJTlRfVVNFUl9JRCI6IlVzZXIgSUQ6IiwiUEJfUFJJTlRfWU9VUl9BTlNXRVIiOiJZb3VyIEFuc3dlciIsIlBCX1BVQkxJU0hfSU5UT19XT1JEX0NVU1RPTUlaQVRJT05fQU5TV0VSIjoiQW5zd2VyIiwiUEJfUFVCTElTSF9JTlRPX1dPUkRfQ1VTVE9NSVpBVElPTl9BTlNXRVJfRklFTEQiOiJBbnN3ZXI6IiwiUEJfUFVCTElTSF9JTlRPX1dPUkRfQ1VTVE9NSVpBVElPTl9BTlNXRVJfU0hFRVQiOiJBbnN3ZXIgS2V5cyIsIlBCX1BVQkxJU0hfSU5UT19XT1JEX0NVU1RPTUlaQVRJT05fUEFHRSI6IlBhZ2UgJU4lIiwiUEJfUFVCTElTSF9JTlRPX1dPUkRfQ1VTVE9NSVpBVElPTl9RVUVTVElPTiI6IlF1ZXN0aW9uIiwiUEJfUFVCTElTSF9JTlRPX1dPUkRfQ1VTVE9NSVpBVElPTl9WRVJTSU9OIjoiVmVyc2lvbiAlTiUiLCJQQl9RVUVTVElPTl9MSVNUX0NBUFRJT04iOiJRdWVzdGlvbiBMaXN0IiwiUEJfUVVFU1RJT05fTl9PRl9DT1VOVF9MQUJFTCI6IlF1ZXN0aW9uICVRVUVTVElPTl9OVU1CRVIlIG9mICVUT1RBTF9RVUVTVElPTlMlIiwiUEJfUVVFU1RJT05fU0NPUkVfTEFCRUwiOiJBd2FyZGVkOiAlUVVFU1RJT05fUE9JTlRTJSIsIlBCX1FVRVNUSU9OX1RJTUVPVVQiOiJZb3VyIHRpbWUgaXMgdXAuIiwiUEJfUVVJWl9USU1FT1VUIjoiWW91IGhhdmUgcmVhY2hlZCB0aGUgdGltZSBsaW1pdCBzZXQgZm9yIHRoZSBxdWl6LiIsIlBCX1JFU1VNRV9RVUlaX1NUQVRFX01FU1NBR0UiOiJXb3VsZCB5b3UgbGlrZSB0byByZXN1bWUgd2hlcmUgeW91IGxlZnQgb2ZmPyIsIlBCX1NFTkRJTkdfUkVQT1JUIjoiU2VuZGluZyBxdWl6IHJlc3VsdHMuLi4iLCJQQl9TRU5EX1JFUE9SVF9UT19FTUFJTF9GQUlMRUQiOiJGYWlsZWQgdG8gc2VuZCBxdWl6IHJlc3VsdHMgdG8gZW1haWwuIERvIHlvdSB3YW50IHRvIHJldHJ5PyIsIlBCX1NFTkRfUkVQT1JUX1RPX1VSTF9GQUlMRUQiOiJGYWlsZWQgdG8gc2VuZCBxdWl6IHJlc3VsdHMgdG8gdGhlIHNlcnZlci4gRG8geW91IHdhbnQgdG8gcmV0cnk/IiwiUEJfU0xJREVTX0xJU1RfQU5TV0VSRURfQ09MVU1OIjoiQW5zd2VyZWQiLCJQQl9TTElERVNfTElTVF9BV0FSREVEX1NDT1JFX0NPTFVNTiI6IkF3YXJkZWQiLCJQQl9TTElERVNfTElTVF9JTkRFWF9DT0xVTU4iOiIjIiwiUEJfU0xJREVTX0xJU1RfTUFSS19DT0xVTU4iOiJNYXJrIFF1ZXN0aW9uIiwiUEJfU0xJREVTX0xJU1RfTUFYX1NDT1JFX0NPTFVNTiI6IlBvaW50cyIsIlBCX1NMSURFU19MSVNUX1NUQVRVU19DT0xVTU4iOiJSZXN1bHQiLCJQQl9TTElERVNfTElTVF9USVRMRV9DT0xVTU4iOiJRdWVzdGlvbiIsIlBCX1NUQVJUX1FVSVpfQlVUVE9OX0xBQkVMIjoiU1RBUlQgUVVJWiIsIlBCX1NUQVJUX1NVUlZFWV9CVVRUT05fTEFCRUwiOiJTVEFSVCBTVVJWRVkiLCJQQl9TVUJNSVRfQUxMX0JVVFRPTl9MQUJFTCI6IlNVQk1JVCBBTEwiLCJQQl9TVUJNSVRfQUxMX0hBU19VTkFOU1dFUkVEX1FVRVNUSU9OX0JZX05FWFRfQUxMT1dfQkxBTksiOiJZb3UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHF1aXosIGJ1dCB5b3UgaGF2ZSB1bmFuc3dlcmVkIHF1ZXN0aW9ucy4gV2hhdCBkbyB5b3Ugd2FudCB0byBkbz8iLCJQQl9TVUJNSVRfQUxMX0hBU19VTkFOU1dFUkVEX1FVRVNUSU9OX0JZX05FWFRfTk9UX0FMTE9XX0JMQU5LIjoiWW91IGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBxdWl6LCBidXQgeW91IGhhdmUgdW5hbnN3ZXJlZCBxdWVzdGlvbnMuIFBsZWFzZSBjb21wbGV0ZSBhbGwgcXVlc3Rpb25zIHRvIGNvbnRpbnVlLiIsIlBCX1NVQk1JVF9BTExfSEFTX1VOQU5TV0VSRURfUVVFU1RJT05fQllfU1VCTUlUX0FMTE9XX0JMQU5LIjoiVGhlcmUgYXJlIHN0aWxsIHVuYW5zd2VyZWQgcXVlc3Rpb25zLiBXb3VsZCB5b3UgbGlrZSB0byBwcm9jZWVkIHdpdGhvdXQgY29tcGxldGluZyBhbGwgcXVlc3Rpb25zPyIsIlBCX1NVQk1JVF9BTExfSEFTX1VOQU5TV0VSRURfUVVFU1RJT05fQllfU1VCTUlUX05PVF9BTExPV19CTEFOSyI6IlRoZXJlIGFyZSBzdGlsbCB1bmFuc3dlcmVkIHF1ZXN0aW9ucy4gUGxlYXNlIGNvbXBsZXRlIGFsbCBxdWVzdGlvbnMgdG8gY29udGludWUuIiwiUEJfU1VCTUlUX0FMTF9OT19VTkFOU1dFUkVEX1FVRVNUSU9OX0JZX05FWFQiOiJBbGwgcXVlc3Rpb25zIGhhdmUgYmVlbiBhbnN3ZXJlZC4gV291bGQgeW91IGxpa2UgdG8gc3VibWl0IHlvdXIgYW5zd2Vycz8iLCJQQl9TVUJNSVRfQUxMX05PX1VOQU5TV0VSRURfUVVFU1RJT05fQllfU1VCTUlUIjoiQXJlIHlvdSBzdXJlIHlvdSdyZSByZWFkeSB0byBzdWJtaXQgeW91ciBhbnN3ZXJzIGFuZCBmaW5pc2ggdGhlIHF1aXo/IiwiUEJfU1VCTUlUX0JVVFRPTl9MQUJFTCI6IlNVQk1JVCIsIlBCX1NVUlZFWV9RVUVTVElPTl9BTlNXRVJFRCI6IlRoYW5rIFlvdSIsIlBCX1RJTUVEX1FVRVNUSU9OX1BPUFVQIjoiJVFVRVNUSU9OX1RJTUUlIHRvIGFuc3dlciIsIlBCX1RJTUVEX1FVRVNUSU9OX1dBUk5JTkciOiJZb3UgaGF2ZSAlUVVFU1RJT05fVElNRSUgdG8gYW5zd2VyIHRoZSBuZXh0IHF1ZXN0aW9uLiIsIlBCX1RJTUVEX1FVSVpfV0FSTklORyI6IllvdSBoYXZlICVRVUlaX1RJTUUlIHRvIGNvbXBsZXRlIHRoZSBxdWl6LiIsIlBCX1RJTUVSX0hPVVJTX0xBQkVMIjoiaCIsIlBCX1RJTUVSX01JTlVURVNfTEFCRUwiOiJtaW4iLCJQQl9USU1FUl9TRUNPTkRTX0xBQkVMIjoic2VjIiwiUEJfVklFV19SRVBPUlRfQlVUVE9OX0xBQkVMIjoiREVUQUlMRUQgUkVQT1JUIiwiUV9DT1JSRUNUX0FOU1dFUlNfVElUTEUiOiJDb3JyZWN0IEFuc3dlcnMiLCJRX0VRVUFUSU9OX1JFUExBQ0VNRU5UX1RFWFQiOiJbZXF1YXRpb25dIiwiUV9NVUxUSVBMRV9DSE9JQ0VfVEVYVF9RVUVTVElPTl9DSE9JQ0VfUFJPTVBUIjoiLSBTZWxlY3QgLSIsIlFfTlVNRVJJQ19RVUVTVElPTl9CRVRXRUVOIjoiYmV0d2VlbiAlT05FJSBhbmQgJVRXTyUiLCJRX05VTUVSSUNfUVVFU1RJT05fRElGRkVSUyI6Im5vdCBlcXVhbCB0byAlT05FJSIsIlFfTlVNRVJJQ19RVUVTVElPTl9FUVVBTFMiOiJlcXVhbCB0byAlT05FJSIsIlFfTlVNRVJJQ19RVUVTVElPTl9HUkVBVEVSX1RIQU4iOiJncmVhdGVyIHRoYW4gJU9ORSUiLCJRX05VTUVSSUNfUVVFU1RJT05fR1JFQVRFUl9USEFOX09SX0VRVUFMUyI6ImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAlT05FJSIsIlFfTlVNRVJJQ19RVUVTVElPTl9MRVNTX1RIQU4iOiJsZXNzIHRoYW4gJU9ORSUiLCJRX05VTUVSSUNfUVVFU1RJT05fTEVTU19USEFOX09SX0VRVUFMUyI6Imxlc3MgdGhhbiBvciBlcXVhbCB0byAlT05FJSIsIlFfUkVTVUxUX1NMSURFX0dSQURFRF9RVUlaX0NPTlRFTlRfVElUTEUiOiJRdWl6IFJlc3VsdHMiLCJRX1VTRVJfQU5TV0VSX1RJVExFIjoiWW91ciBBbnN3ZXIifSwiaWQiOnRydWUsImIiOiJFbmdsaXNoIn0sImMiOnsiZCI6IkxpZ2h0IEJsdWUiLCJjIjp7ImJ1dHRvbi5jb250ZW50Lm5vcm1hbCI6MTY3NzcyMTUsImJ1dHRvbi5jb250ZW50Lm92ZXIiOjE2Nzc3MjE1LCJidXR0b24ubm9ybWFsIjo1NDA5NzU5LCJidXR0b24ub3ZlciI6NDk0NzQwMSwiYnV0dG9ucy5tZW51cy5oaWdobGlnaHQiOjE2Nzc1MzcwLCJidXR0b25zLm1lbnVzLmhpZ2hsaWdodC5zZWNvbmQiOjE2Nzc0MDQ4LCJjb250cm9scy5mb2N1cyI6NTQwOTc1OSwiZGlhbG9nQm94LmJ1dHRvbi5jb250ZW50Lm5vcm1hbCI6MTY3NzcyMTUsImRpYWxvZ0JveC5idXR0b24uY29udGVudC5vdmVyIjoxNjc3NzIxNSwiZGlhbG9nQm94LmJ1dHRvbi5ub3JtYWwiOjU0MDk3NTksImRpYWxvZ0JveC5idXR0b24ub3ZlciI6NDk0NzQwMSwiZmVlZGJhY2sudGl0bGUuYW5zd2VyZWQiOjU0MDk3NTksImZlZWRiYWNrLnRpdGxlLmNvcnJlY3QiOjgxNzM4NDEsImZlZWRiYWNrLnRpdGxlLmluY29ycmVjdCI6MTQzNzU0OTksImZlZWRiYWNrLnRpdGxlLnBhcnRpYWxseWNvcnJlY3QiOjE2MjkyNDExLCJmZWVkYmFjay50aXRsZS50ZXh0IjoxNjc3NzIxNSwiaG90c3BvdC5jb250ZW50Lm5vcm1hbCI6NTQwOTc1OSwibWVkaWEucGxheWVyLmJhY2tncm91bmQiOjE1OTg3Njk5LCJtZWRpYS5wbGF5ZXIuYnV0dG9ucyI6NDczNzA5NiwibWVkaWEucGxheWVyLnByb2dyZXNzIjo3MzY4ODE2LCJwYWdlLmJhY2tncm91bmQiOjEzNTU0MTMxLCJwbGF5ZXIuYmFja2dyb3VuZCI6MTY3NzcyMTUsInJhZGlvLmNoZWNrLmNvbnRlbnQubm9ybWFsIjo1NDA5NzU5LCJyYWRpby5jaGVjay5oaWdobGlnaHQiOjE2NzcxMTU0LCJyZXBvcnQucHJvZ3Jlc3NiYXIuYmFja2dyb3VuZCI6NTQwOTc1OSwic2xpZGUuYm9yZGVyIjoxNDczNzYzMiwidG9wUGFuZWwudGV4dCI6NDY3MTU2Mn0sImlkIjp0cnVlLCJiIjoiTGlnaHQgQmx1ZSJ9LCJzIjp7Im4iOnRydWUsInAiOnRydWV9LCJxIjp7InMiOnRydWUsImQiOnRydWV9LCJoIjpmYWxzZX0sInNtIjpbeyJuIjoiRGVmYXVsdCIsImIiOnsiZiI6InNvbGlkRmlsbCIsInMiOnsiYyI6MTY3NzcyMTUsImEiOjF9fSwicSI6eyJ1IjpmYWxzZSwicyI6MTgsImMiOjUwNjYwNjEsImYiOiJmbnQxXzEwNjIzIiwiYiI6ZmFsc2UsImkiOmZhbHNlfSwiYSI6eyJ1IjpmYWxzZSwicyI6MTYsImMiOjAsImYiOiJmbnQwXzEwNjIzIiwiYiI6ZmFsc2UsImkiOmZhbHNlfX1dfSwicyI6e30sImIiOiJDOi9Vc2Vycy9tYmFybi9BcHBEYXRhL0xvY2FsL1RlbXAvaVNwcmluZy9Db252ZXJ0L3F1aXp6ZXMvcXVpel9iZ18xLnBuZyIsImZwIjpmYWxzZSwicGJzIjp7fSwicnMiOnsiYSI6e30sInYiOnt9LCJpIjp7IkM6L1VzZXJzL21iYXJuL0FwcERhdGEvTG9jYWwvVGVtcC9pU3ByaW5nL0NvbnZlcnQvcXVpenplcy9xdWl6X2JnXzEucG5nIjp7InMiOiJxdWl6NVxcaW1hZ2VzXFxxdWl6X2JnXzEucG5nIiwidiI6OTYwLCJoIjo1NDB9fX0sImZzIjp7ImZudDBfMTA2MjMiOlsicXVpejUvZm9udHMvZm50MC53b2ZmIl0sImZudDFfMTA2MjMiOlsicXVpejUvZm9udHMvZm50MS53b2ZmIl0sImZudDJfMTA2MjMiOlsicXVpejUvZm9udHMvZm50Mi53b2ZmIl19LCJTIjp7ImZudDBfMTA2MjMiOnsiZiI6Ik9wZW4gU2FucyIsImIiOmZhbHNlLCJpIjpmYWxzZX0sImZudDFfMTA2MjMiOnsiZiI6Ik9wZW4gU2FucyBTZW1pYm9sZCIsImIiOmZhbHNlLCJpIjpmYWxzZX0sImZudDJfMTA2MjMiOnsiZiI6Ik9wZW4gU2FucyBTZW1pYm9sZCIsImIiOmZhbHNlLCJpIjp0cnVlfX0sInYiOnt9fQ==";
	var skinSettings = {};
	var reportUrl = "https://s4.ispringsolutions.com";
	loadHandler&&loadHandler(27, 'pczh2el0a50p-sdofx19svyvj', quizInfo, skinSettings, reportUrl);
	})();