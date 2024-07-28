import React, { useState, useMemo } from "react";
import styles from "./WordList.module.css";

function WordList() {
	const [words, setWords] = useState([
		{
			id: "16397",
			english: "cloud",
			transcription: "[klaud]",
			russian: "облако",
		},
		{ id: "16400", english: "hail", transcription: "[heɪl]", russian: "град" },
		{
			id: "16408",
			english: "hello",
			transcription: "[həˈləʊ]",
			russian: "привет",
		},
		{
			id: "16431",
			english: "ocean",
			transcription: "[ˈəuʃən]",
			russian: "океан",
		},
		{
			id: "16432",
			english: "forest",
			transcription: "[ˈfɔrɪst]",
			russian: "лес",
		},
		{ id: "16433", english: "sky", transcription: "[skaɪ]", russian: "небо" },
		{ id: "16434", english: "sea", transcription: "[si:]", russian: "море" },
		{ id: "16435", english: "wind", transcription: "[wɪnd]", russian: "ветер" },
		{ id: "16436", english: "lake", transcription: "[leɪk]", russian: "озеро" },
		{
			id: "16437",
			english: "mountain",
			transcription: "[ˈmauntɪn]",
			russian: "гора",
		},
		{
			id: "16438",
			english: "waterfall",
			transcription: "[ˈwɔ:təfɔ:l]",
			russian: "водопад",
		},
		{
			id: "16439",
			english: "thunderstorm",
			transcription: "[ˈθʌndəstɔ:m]",
			russian: "гроза",
		},
		{
			id: "16440",
			english: "blizzard",
			transcription: "[ˈblɪzəd]",
			russian: "вьюга",
		},
		{ id: "16441", english: "sun", transcription: "[sʌn]", russian: "солнце" },
		{
			id: "16442",
			english: "river",
			transcription: "[ˈrɪvə]",
			russian: "река",
		},
		{
			id: "16443",
			english: "valley",
			transcription: "[ˈvælɪ]",
			russian: "долина",
		},
		{ id: "16444", english: "pond", transcription: "[pɔnd]", russian: "пруд" },
		{ id: "16445", english: "snow", transcription: "[snəu]", russian: "снег" },
		{
			id: "16446",
			english: "beach",
			transcription: "[bi:tʃ]",
			russian: "пляж",
		},
		{
			id: "16447",
			english: "stream",
			transcription: "[stri:m]",
			russian: "ручей",
		},
	]);

	const [editId, setEditId] = useState(null);
	const [editWord, setEditWord] = useState({
		english: "",
		transcription: "",
		russian: "",
	});
	const [errors, setErrors] = useState({
		english: false,
		transcription: false,
		russian: false,
	});

	const startEdit = (id, word) => {
		setEditId(id);
		setEditWord(word);
		setErrors({ english: false, transcription: false, russian: false });
	};

	const deleteWord = (id) => {
		setWords(words.filter((word) => word.id !== id));
	};

	const validateFields = () => {
		const { english, transcription, russian } = editWord;
		const newErrors = {
			english: !english.trim(),
			transcription: !transcription.trim(),
			russian: !russian.trim(),
		};
		setErrors(newErrors);
		return !Object.values(newErrors).includes(true);
	};

	const saveEdit = () => {
		if (validateFields()) {
			if (editId) {
				// Update existing word
				console.log("Updated Word:", editWord);
				setWords(words.map((word) => (word.id === editId ? editWord : word)));
			} else {
				// Add new word (when editId is null)
				const newId = (Date.now() + Math.random()).toString(); // Generate a unique ID
				const newWord = { id: newId, ...editWord };
				setWords([...words, newWord]);
				console.log("New Word Added:", newWord);
			}
			cancelEdit();
		} else {
			alert("Please fill out all fields.");
		}
	};

	const cancelEdit = () => {
		setEditId(null);
		setEditWord({ english: "", transcription: "", russian: "" });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditWord((prevState) => ({ ...prevState, [name]: value }));
	};

	const isSaveDisabled = useMemo(() => !validateFields(), [editWord]);

	return (
		<div>
			<table className={styles.table}>
				<thead>
					<tr className={styles.tr}>
						<th className={styles.th}>English</th>
						<th className={styles.th}>Transcription</th>
						<th className={styles.th}>Russian</th>
						<th className={styles.th}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{words.map((word) => (
						<tr key={word.id} className={styles.tr}>
							<td className={styles.td}>
								{editId === word.id ? (
									<input
										type="text"
										name="english"
										value={editWord.english}
										onChange={handleChange}
										className={`${styles.input} ${
											errors.english ? styles.inputError : ""
										}`}
									/>
								) : (
									word.english
								)}
							</td>
							<td className={styles.td}>
								{editId === word.id ? (
									<input
										type="text"
										name="transcription"
										value={editWord.transcription}
										onChange={handleChange}
										className={`${styles.input} ${
											errors.transcription ? styles.inputError : ""
										}`}
									/>
								) : (
									word.transcription
								)}
							</td>
							<td className={styles.td}>
								{editId === word.id ? (
									<input
										type="text"
										name="russian"
										value={editWord.russian}
										onChange={handleChange}
										className={`${styles.input} ${
											errors.russian ? styles.inputError : ""
										}`}
									/>
								) : (
									word.russian
								)}
							</td>
							<td className={styles.td}>
								{editId === word.id ? (
									<>
										<button
											onClick={saveEdit}
											className={`${styles.button} ${styles.buttonSave}`}
											disabled={isSaveDisabled}
										>
											Save
										</button>
										<button
											onClick={cancelEdit}
											className={`${styles.button} ${styles.buttonCancel}`}
										>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={() => startEdit(word.id, word)}
											className={`${styles.button} ${styles.buttonEdit}`}
										>
											Edit
										</button>
										<button
											onClick={() => deleteWord(word.id)}
											className={`${styles.button} ${styles.buttonDelete}`}
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{editId === null && (
				<div>
					<h2>Add New Word</h2>
					<input
						type="text"
						name="english"
						value={editWord.english}
						onChange={handleChange}
						placeholder="English"
						className={`${styles.input} ${
							errors.english ? styles.inputError : ""
						}`}
					/>
					<input
						type="text"
						name="transcription"
						value={editWord.transcription}
						onChange={handleChange}
						placeholder="Transcription"
						className={`${styles.input} ${
							errors.transcription ? styles.inputError : ""
						}`}
					/>
					<input
						type="text"
						name="russian"
						value={editWord.russian}
						onChange={handleChange}
						placeholder="Russian"
						className={`${styles.input} ${
							errors.russian ? styles.inputError : ""
						}`}
					/>
					<button
						onClick={saveEdit}
						className={`${styles.button} ${styles.buttonSave}`}
						disabled={isSaveDisabled}
					>
						Add
					</button>
				</div>
			)}
		</div>
	);
}

export default WordList;
