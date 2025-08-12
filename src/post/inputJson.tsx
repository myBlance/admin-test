import React, { useState, useEffect } from "react";

interface JsonFileInputProps {
    onLoad: (data: any) => void;
    initialData?: any;
}

export default function JsonFileInput({ onLoad, initialData }: JsonFileInputProps) {
    const [jsonData, setJsonData] = useState<any>(initialData || null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setJsonData(initialData || null);
    }, [initialData]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type !== "application/json") {
            setError("Vui lòng chọn file JSON hợp lệ");
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                const parsed = JSON.parse(text);
                setJsonData(parsed);
                onLoad(parsed); // lưu về cha
                setError(null);
            } catch (err) {
                setError("File không đúng định dạng JSON");
            }
        };
        reader.readAsText(file);
    };

    const handleClear = () => {
        setJsonData(null);
        onLoad(null);
    };

    return (
        <div>
            <label>
                Chọn file JSON:
                <input type="file" accept=".json" onChange={handleFileChange} />
            </label>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {jsonData && (
                <>
                    <p><strong>Dữ liệu JSON:</strong></p>
                    <pre style={{ background: "#f5f5f5", padding: "10px" }}>
                        {JSON.stringify(jsonData, null, 2)}
                    </pre>
                    <button type="button" onClick={handleClear}>
                        Bỏ chọn file
                    </button>
                </>
            )}
        </div>
    );
}
