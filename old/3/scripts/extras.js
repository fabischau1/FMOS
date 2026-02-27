		function malwareScan() {
          let safeFiles = [];
          let malwareFiles = [];
          for (let file in files) {
            if (file !== "FA_AntiVira.py") {
              let fileContent = files[file];
              if (fileContent.includes("document.documentElement.innerHTML = newHtml;") ||
                  fileContent.includes("let fileName = Math.random().toString(36).substr(2, 8);")) {
                malwareFiles.push(file);
                console.log(`Malware detected in file: ${file}`);
              } else {
                safeFiles.push(file);
                console.log(`File is safe: ${file}`);
              }
            }
          }
          console.log(`Scan complete!`);
          console.log(`Safe files: ${safeFiles.join(", ")}`);
          console.log(`Malware files: ${malwareFiles.join(", ")}`);

          alert(`Scan complete! Check console for results.`);
        }